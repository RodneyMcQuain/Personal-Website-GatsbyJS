---
path: "/blog-posts/remote-mobbing-tools-to-survive-the-pandemic"
date: "2020-08-30"
title: "Remote Mobbing Tools to Survive the Pandemic"
author: "Rodney McQuain"
featuredImage: ./index.png
category: "Software Process"
tags: ["Collaboration", "Pair Programming", "Mob Programming"]
---

Given that whole pandemic thing, many of us have been uprooted from the office and it's become quite a bit more difficult to run a successful mob.  Luckily, there are plenty of tools out there that can help us get back to being productive and maybe a little less lonely.



## Mobbing Terms

To make sure we're all on the same page I'm going to list some terms and my interpretation of their usage in the context of mobbing.

* Mob - an activity where multiple people are collaborating on work at the same time.  One person is the driver, another person is the navigator, and any remaining people have nondescript roles.  These roles rotate to other people periodically.
* Driver - a role in a mob that's performed by 1 person at a time.  A person in this role is writing the code, googling, navigating the codebase, or really any of the physical actions that need to be taken care of.  The driver does not do anything they haven't been instructed to do.
* Navigator - a role in a mob that's performed by 1 person at a time.  A person in this role decides what the driver will do next.  Everybody in the mob can contribute their ideas about what the driver should do next, but the navigator has the final say and leads the discussion.



## Sharing Work

The first important thing to discuss is: how will the work be displayed to everybody in the mob?



### Screen Share + Screen Control

There's plenty of software out there that allow for a group of people to get together and have somebody share their screen while other people can control the sharer's computer as if it were the sharer themselves.   Your organization probably already uses software that allows for this, such as [Zoom](https://support.zoom.us/hc/en-us/articles/201362673-Requesting-or-giving-remote-control) and [Microsoft Teams](https://support.microsoft.com/en-us/office/share-content-in-a-meeting-in-teams-fcc2bf59-aecd-4481-8f99-ce55dd836ce8).  Screen control mobs work by starting with someone sharing their screen, they then allow the current driver to take control of the screen.

Pros:

* Everything is on one computer
* When switching drivers you don't have to:
  * restart the application (which may take a considerable amount of time, especially if you need the application to be in a specific state)
  * upload files for your teammates (i.e. documentation that changes in tandem with the work done on the application or files the application generates)
* Can be useful when only 1 or few people in the mob have the permissions required to do the work
* Switching drivers is trivial
* Requires very little setup

Cons:

* Latency (if anybody but the sharer is driving there will be some delay before every action is performed)
* Won't have custom shortcuts that you've become accustomed to on your machine
* It can be tempting for the sharer to drive even when they're not the driver



### Live Share

[Live Share](https://visualstudio.microsoft.com/services/live-share/) allows for real-time collaboration inside Microsoft's Visual Studio and Visual Studio Code IDEs.  Initially, I thought this was the most promising option for remote mobbing, but it seems that it isn't quite mature enough yet.  For clarity, my experience with Live Share has been mostly through Visual Studio and a majority of my complaints seem to just be growing pains.

Pros:

* Collaborative debugging (This could be considered a smell.  Since it could lead to people in the mob going off on their own and either not contributing to the group or causing confusion by interrupting the rest of the group's train of thought.  Despite that, it's nice to have the option for it)
* Can share servers (including somebody's localhost) between everybody (really helpful for web projects, so you don't have to restart the application every time there's a driver change)
* Typically get to use your ideal development environment

Cons:

* People are more likely to go off on their own exploration instead of contributing to the mob

* People are more likely to make changes to the code while they're not driving

* Depending on the type of application if you're not the original sharer you won't be able to run it

* If the application produces local files they're not propagated to everybody's computer

* IntelliSense occasionally not working

* Occasionally noticeable latency between doing an action and it being performed

* Keyboard shortcuts occasionally not working

* Focus on the driver occasionally getting lost

* Test Explorer not working when you're not the original sharer

  

### Screen Share + Source Control

Leveraging version control systems, such as Git, is another option.  At the end of the driver's turn they commit their changes so that the next driver can pull them down.  On top of this the driver shares their screen with the rest of the mob.  To do this, you can of course use tools like Zoom, Microsoft Teams, Discord, or Slack.  Some people have created tools to facilitate version control mobs, one of my coworkers has created such a tool, [falco](https://www.npmjs.com/package/@aptera/falco).  Tools like this are integral for making these types of mobs feel natural.

Pros:

* Everybody get's their preferred development environment
* Ensures that people are committing frequently
* No latency issues while developing

Cons:

* Everybody must have the repository locally
* If the application produces output files locally, they aren't immediately accessible to the next driver
* If the work involves using a file outside of source control it can become annoying to share it with your teammates
* Have to restart the application after switching drivers
* Time consuming if the mob doesn't use a tool to automate the tedious things (pushing commits, receiving commits, squashing commits, etc.)
* Can lead to confusing version control history if you don't use a tool to squash commits



### My Opinion

Do a screen control mob when:

* there are files outside of source control you frequently need to use, such as:
  * files output by the program
  * documentation that needs to be updated
  * database queries that are currently in progress
* the application has an extremely slow build
* the application needs to be in a specific state that requires a considerable amount of time to get to  
* trying out mobbing with teammates or onboarding a new teammate (since there's less friction in the setup)

In all other cases I think a version control mob is preferable.  I also don't think you have to lock yourselves into one of the options for an entire session, it may make sense to switch between options based on the current situation.



## Collaboration Timer

Another indispensable part to a successful mob where everybody is engaged and productive is having a timer that signifies when people are meant to rotate roles.



### Local

One option is to use a timer local to your machine.  One such example is [Mobster](http://mobster.cc/).  It's mature and has just about everything you want in a mob timer, such as:

* designated roles
* configurable interval for each role rotation 
* configurable break intervals that occur after a specified number of rotations
* an overlay in the corner of the screen indicating the remaining time and current roles
* a pop-up that covers the screen forcing you to switch roles when time's up

Mobster is the ideal choice for a screen control mob.



### Distributed

Unfortunately, there aren't many tools out there that allow you and your teammates to share a timer while also signifying the driver and navigator roles at the same time.  

[Cuckoo](https://cuckoo.team/) is an option, it's mature and provides a timer that all your teammates can see.  Though, it doesn't track who currently has what role and it can be difficult to notice when the timer goes off.  

A coworker of mine recently made a distributed timer specifically for mobbing, called [Mobber](https://mobber.dev).  It has some important features for a mob timer, such as:

* designated roles
* configurable interval for each role rotation 
* an audio cue that indicates when an interval has completed
* a repeating audio cue to urge people to switch roles when time's up

At this point, use Mobber if you're doing a Live Share or version control mob.



## Closing Thoughts

Remote mobbing tools still have plenty of ways to improve, but what we have nowadays is more than enough to survive.  Everybody can use their favorite development environment while in their favorite physical environment.  This alone is enough to consider continuing remote mobs even after the pandemic subsides.  

So, what tools are you using for remote mobs?  Do you have any ideas for tools that could improve the mobbing experience?