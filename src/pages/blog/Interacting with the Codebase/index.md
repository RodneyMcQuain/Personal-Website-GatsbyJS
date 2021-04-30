---
path: "/blog-posts/interacting-with-the-codebase"
date: "2021-04-13"
title: "Interacting with the Codebase"
author: "Rodney McQuain"
featuredImage: ./index.jpg
featuredImageAltText: "A white, rounded, triangular, futuristic looking room where arches span the ceiling."
category: "Computer Science"
tags: ["Clean Code", "User Experience", "Developer Experience", "Software Architecture"]
---

When building software we sometimes forget it shouldn't be solely for our end-users, but also for the large amount of future developers.  And that's unfortunate because the user experience (UX) of the codebase has a direct effect on the UX of the application itself.  If the codebase is unintuitive, inconsistent, messy, coupled, and incoherent it's going to take substantial amounts of time to introduce new UX improvements and features.  Not to mention the poor health of a codebase entices developers to take shortcuts and throw more garbage into the trashcan.

So, how can we start making the codebase easier to work with? Don Norman, in his book *The Design of Everyday Things*, states that there are 6 principles to follow when creating systems that are meant to be interacted with, dubbed the *Fundamental Principles of Interaction*.

1. Affordances
2. Signifiers
3. Feedback
4. Constraints
5. Mapping
6. Conceptual Model

These principles are often utilized in the UIs we create, but sometimes neglected in the codebases we maintain.  Maybe that's because they're not as apparent when looking at walls of code and files.  So, let's examine how these principles apply to the code we write.

## Affordances

> The term affordance refers to the relationship between a physical object and a person (or for that matter, any interacting agent, whether animal or human, or even machines and robots). An affordance is a relationship between the properties of an object and the capabilities of the agent that determine just how the object could possibly be used. 	
>
> — Don Norman [^1]

With that definition in mind what affordances can you spot in this code?

```java
public class Square {
    private double width; 
    private final IDrawingStrategy _drawingStrategy;
    
    public Square(IDrawingStrategy drawingStrategy, double width) {
        _drawingStrategy = drawingStrategy;
        this.width = width;
    }
    
    public void draw() { _drawingStrategy.draw(width); }
    public double getWidth() { return width; }
    public void setWidth(double width) { this.width = width; }
}

public interface IDrawingStrategy {
    public void draw(double width);
}
```

* `Square` *affords* for inheritance 
* `Square` *affords* for use anywhere
* `Square` *affords* for use with an instance
* `width` *affords* for being set and retrieved from anywhere
* `setWidth` and `getWidth` *afford* for a level of indirection, the ability to alter behavior pertaining to setting and getting `width` without breaking the callers
* `draw`, `getWidth`, and `setWidth`*afford* for being overridden 
* `drawingStrategy` *affords* for setting in the constructor
* `Square` *affords* for drawing, getting width, and setting width
* The dependency inversion of `IDrawingStrategy` *affords* for unit testability of `Square`
* `IDrawingStrategy` *affords* for a seam, the ability to alter drawing behavior while `Square` is none the wiser

Affordances are everywhere and I'm sure you can find a few more in that example alone.  

Being conscious of the affordances we write is substantial as it shapes how future developers interact with our code.  To minimize ways for developers to misuse your code, ask yourself some questions about what your code affords, such as:

* should that method be overridable?
* does that access modifier really need to be public?
* should that class disallow inheritance?
* does that interface need to be that big?
* does that property need a setter?
* should that dependency be inverted?

A lot of programming languages allow us to have more control over our affordances than typical physical and digital user interfaces.  Despite this we often  gravitate toward what the language defaults to, either out of naivety or a poor perceived effort to value ratio.  For example, think about how if you took 2 codebases, both written for the same application, but the difference is one used Java and the other, C#.  The Java codebase is more likely to be prolific in affordances for method overriding.  Simply because Java allows overriding by default, whereas C# requires an explicit marking.  Point being, not all affordances are apparent and that's when these explicit markings, also known as signifiers, come into play.

> If an affordance or anti-affordance cannot be perceived, some means of signaling its presence is required: I call this property a signifier.
>
> — Don Norman [^2]

## Signifiers

> Affordances determine what actions are possible. Signifiers communicate where the action should take place.
>
> — Don Norman [^3]

> Signifier refers to any mark or sound, any perceivable indicator that communicates appropriate behavior to a person.
>
> — Don Norman [^3]

Lets say a user just filled out a form with their car's specifications.  They submit the form and the application needs to persist the data and show the user their car's specifications in a pretty layout.  One approach may be to write something like this:

```javascript
const createCarSpecsComponent = car => {
	insertIntoDatabase(car);
	let carSpecsComponent;
   	/* DOM manipulations to create an HTML element that showcases the car's specifications */; 
	return carSpecsComponent;
};
```

One of the issues here is that the function doesn't *signify* that it's doing anything with the database.  The database interaction is merely a side effect of `createCarSpecsComponent`.  The callers of this function only see `createCarSpecsComponentCar(car)`, so how could they possibly know it also inserts the car into the database?  The function name, `createCarSpecsComponent`, is a bad signifier.

> NOTE: This example is a little contrived such that it can be more easily digestible.  Ideally a developer would not implement a function like this and instead have distinct boundaries between the UI, data, and business layers.  Nonetheless, when working with legacy code who knows what you'll find.  You may find this function referenced 50 times in untested code.  Using refactoring tools to give the function a more accurate name may be more time efficient and safe than trying to decouple these 2 responsibilities in all locations.

## Feedback

> Feedback: some way of letting you know that the system is working on your request.
>
> — Don Norman [^4] 

```csharp
public class Person {
    ...
    public string PhoneNumber { get; set; }
    ...
}
```

In this example `PhoneNumber` can be null, an empty string, arbitrary letters, or a multitude of other things wouldn't function as a phone number.  So, what happens if this property contains an invalid phone number?  I don't know - and that's the issue.  

> Feedback must be immediate: even a delay of a tenth of a second can be disconcerting.
>
> — Don Norman [^4]

Not immediately knowing if a phone number is valid could cause a lot of unintended problems further down the system, such as failed authentication for a credit card, a call/text to a number that goes into the void, a null reference exception, or various other problems.  A lot of these problems become significantly more difficult and time consuming to debug when they're further away from the actual source of the issue, the exact location where an invalid phone number originated.  Depending on your application, it's often a safe assumption that the rest of the system has no use for an improperly formatted phone number.  To improve this you could add some validation as soon as possible:

```csharp
public sealed class PhoneNumber {
    public readonly string PhoneNumber;
    
    public PhoneNumber(string phoneNumber) {
        if (!isValidPhoneNumber(phoneNumber)) 
            throw new ArgumentException($"{phoneNumber} is not a valid phone number.");
        PhoneNumber = phoneNumber;
    }
    ...
}
```

```csharp
public class Person {
    ...
    public PhoneNumber PhoneNumber { get; set; }
    ...
}
```

Further, if your application has strict formatting requirements for phone numbers, for clarity you can include those requirements in the exception message.

Giving immediate feedback like this 

* makes problems easier to debug
* indicates intent
* more easily allows for feedback in the actual user interface
* lowers the cognitive load of developers surveying the codebase

##  Constraints

> Constraints are powerful clues, limiting the set of possible actions. The thoughtful use of constraints in design lets people readily determine the proper course of action, even in a novel situation.
>
> — Don Norman [^5]

After reading that, as a developer, one thing may immediately come to mind, data types.  Why do we people like static typing?  One reason is: they *constrain* the different kinds of data that a *thing* can represent, allowing us to understand and perform actions specific to that type of data.  Despite understanding this, constraining properly is still hard.  Take this example of calculating the cost for taking a vacation:

```csharp
public class VacationCostCalculator {
    public double Calculate(Vacation vacation) => vacation.VehiclesMilesPerGallon * vacation.MilesToDestination;
}

public record Vacation(double VehiclesMilesPerGallon, double MilesToDestination, string Location, DateTime StartDate, DateTime EndDate);
```

The `Calculate` method requires an argument of type `Vacation`.  Despite `Calculate` only needing to know about `VehiclesMilesPerGallon` and `milesToDestination` it also needs to know `Location`, `StartDate`, and `EndDate`.  As a result, this method is

* More difficult to reuse.  Every caller of this method must create a `Vacation`.  Meaning, it can't be used in contexts where the caller doesn't have access to data for `StartDate` and `EndDate`.
* Unintuitive.  One of the intentions of abstractions are to hide the details and give us something that is easier to reason about.  Passing in an entire `Vacation` leaves the caller wondering what they're actually calling.  Is it figuring out the cost of hotels based on `Location`? is it figuring out how much money the vacationer is losing by not being able to work from `StartDate` to `EndDate`?  It's hard to say without looking at the implementation. 

This sort of coupling of `Calculate` to `Vacation` is known as *stamp coupling*.  While it's not the worst form of coupling, we can make this method more reusable and intuitive with stricter *constraints*.

```csharp
public class VacationCostCalculator {
    public double Calculate(double vehiclesMilesPerGallon, double milesToDestination) => vehiclesMilesPerGallon * milesToDestination;
}

public record Vacation(double VehiclesMilesPerGallon, double MilesToDestination, string Location, DateTime StartDate, DateTime EndDate);
```

By parameterizing only the values that `Calculate` needs (data coupling) the method becomes easier to call.  

```csharp
var vacationCost = _vacationCostCalclulator.Calculate(vehiclesMilesPerGallon, milesToDestination);
```

Now that the parameters are explicit about what they need, readers can infer what the method actually does, just by looking at the call (or IntelliSense).  Allowing them to have an easier time supplying the method with what it needs. 

> NOTE: Depending on your context you may not want to always favor parameterizing each value.  Instead you may opt to create a new data structure that only stores `vehiclesMilesPerGallon` and `milesToDestination` and pass that structure into the method instead.  This maintains the low amount of coupling while adding a layer of indirection.  The extra layer of indirection is helpful because:
>
> * you get to add a higher-level name to describe the 2 properties
> * you don't have to duplicate these fields across multiple data structures or parameter lists
> * you can easily add behavior or new fields to the data structure.  In this example that would allow you to add a new field to the data structure and `Calculate` wouldn't have to change signature, which means you wouldn't have to update the callers.

## Mappings

> The relationship between controls and their actions.
>
> — Don Norman [^6]

A similar concept in software design is that of *cohesion*.  The measure of how related elements inside of a *container* (class, module, function, etc.) are to one another. For example, say you have a single class that implements the following interface:

```typescript
interface MathUtilities {
    add(num1: number, num2: number): number;
    subtract(num1: number, num2: number): number;
    multiply(num1: number, num2: number): number;
    squareRoot(num: number): number;
    matrixAddition(matrix1: Matrix, matrix2: Matrix): Matrix;
}
type Matrix = number[][];
```

This isn't very cohesive for a couple of reasons:

* where is `division`?  The other 3 arithmetic operations are present, is `division` in a different container?
* why is this responsible for arithmetic operations as well as square root and matrix addition?

When a container starts doing too much not only is it difficult to reuse, but it also becomes harder to understand.  Further, it leads a poor example.  Now anybody that has math related functionality is going to dump it into this class.  This is what's known as *logical cohesion*, these 5 actions are all in 1 container despite only having a loose relation to one another through math.  To avoid low cohesion like this, you can ask yourself some questions:

* Does this container have one reason to change?  
  * Not really, what if the application now needs to support adding 3 numbers together, derivatives, imaginary numbers for square root, etc.  Those are all distinctly different responsibilities (reasons to change).
* Will all of this container's actions be able to be used at the same time towards a similar, well-defined goal?  
  * It's unlikely that whatever code uses this abstraction will need to know about all of these actions.  Leading to unnecessary noise and confusion when trying to understand the code. Further, forcing every consumer of this interface to implement all of these actions means that they have to implement all 5 actions despite potentially only needing to change 1.
* Am I able to give this container a specific name?  
  * Seeing a container's name suffixed with "Utilities" is a pretty decent signifier that a container is full of non-specific behavior.

If the answer is *no* to any of these questions you should consider how cohesive your container is.  The lower the cohesion, the worse your *mapping* is likely to be.  This is because the closer related parts of a system are, the easier it is to understand.

> * **Best mapping:** Controls are mounted directly on the item to be controlled.
> * **Second-best mapping:** Controls are as close as possible to the object to be controlled.
>
> — Don Norman [^7]

## Conceptual Models

> A conceptual model is an explanation, usually highly simplified, of how something works.
>
> — Don Norman [^8]

A good conceptual model is built upon good uses of all of the previous principles, affordances, signifiers, constraints, feedback, and mappings.  If you don't follow any of these principles well, you risk people distrusting the codebase.  Distrust of the codebase negatively impacts people's conceptual models.

> Without a good [conceptual] model, we operate by rote, blindly; we do operations as we were told to do them; we can’t fully appreciate why, what effects to expect, or what to do if things go wrong. As long as things work properly, we can manage. When things go wrong, however, or when we come upon a novel situation, then we need a deeper understanding, a good model.
>
> — Don Norman [^9]

* If there's not a reasonable level of *affordances*, our code becomes rigid and coupled.
* If *signifiers* are inaccurate, we spend considerable amounts of time figuring out why.  Further, from that single inaccuracy we also start to question the rest of the codebase's signifiers, leading to larger time losses.
* If we neglect to give *feedback* or give misleading *feedback*, we lose our intuitive perception of how the code *should* work.
* If adequate *constraints* aren't put in place, our code becomes less reliable and considerably more difficult to extend. 
* If we don't pay attention to how our actions are *mapped*, the codebase becomes confusing and difficult to navigate.

All of these principles come together to form one of the fundamental aspects of software, abstraction.  In terms of code, abstractions aren't just good for reusability they also greatly "simplify how we understand something."  For example:

```typescript
interface RectangleDrawer {
    fill(x: number, y: number, width: number, height: number): void;
}
```

With the `RectangleDrawer` *abstraction* we don't need to know the specifics of how to `fill` a rectangle, it just works.  A lot of power comes with that.  It lowers our cognitive load and allows us to move quickly, as we don't need to understand the details.

A good abstraction *is* a good conceptual model.  A strong conceptual model allows us to pull directly from our intuition, something we've built up since the day we were born.

## Closing Words

The fundamental principles of interaction work well not just for the user experiences we craft for our user interfaces, but also for the code we write.  Even if you don't find them to be insightful for the software you write, maybe you can find their uses in other fields, such as UX or communication.  That said, these principles setup a framework for creating a codebase that future developers *want* to interact with. 

What do you think? What value do you see in keeping these principles in mind while writing software?  Do you see applications of these principles in other fields?  In what other ways can these principles influence how we write software?

<br />

[^1]: D. A. Norman, “The Design of Everyday Things,” in *The Design of Everyday Things*, Revised & Expanded., New York: Basic Books, 2013, p. 11.
[^2]: D. A. Norman, “The Design of Everyday Things,” in *The Design of Everyday Things*, Revised & Expanded., New York: Basic Books, 2013, p. 12.
[^3]: D. A. Norman, “The Design of Everyday Things,” in *The Design of Everyday Things*, Revised & Expanded., New York: Basic Books, 2013, p. 14.
[^4]: D. A. Norman, “The Design of Everyday Things,” in *The Design of Everyday Things*, Revised & Expanded., New York: Basic Books, 2013, p. 23.
[^5]: D. A. Norman, “The Design of Everyday Things,” in *The Design of Everyday Things*, Revised & Expanded., New York: Basic Books, 2013, p. 125.
[^6]: D. A. Norman, “The Design of Everyday Things,” in *The Design of Everyday Things*, Revised & Expanded., New York: Basic Books, 2013, p. 72.
[^7]: D. A. Norman, “The Design of Everyday Things,” in *The Design of Everyday Things*, Revised & Expanded., New York: Basic Books, 2013, p. 115.
[^8]: D. A. Norman, “The Design of Everyday Things,” in *The Design of Everyday Things*, Revised & Expanded., New York: Basic Books, 2013, p. 25.
[^9]: D. A. Norman, “The Design of Everyday Things,” in *The Design of Everyday Things*, Revised & Expanded., New York: Basic Books, 2013, p. 28.









