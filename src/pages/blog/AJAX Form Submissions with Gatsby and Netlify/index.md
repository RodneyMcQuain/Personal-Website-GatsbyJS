---
path: "/blog-posts/ajax-form-submissions-with-gatsby-and-netlify"
date: "2019-08-25"
title: "AJAX Form Submissions with Gatsby and Netlify"
author: "Rodney McQuain"
featuredImage: ./index.png
featuredImageAltText: "Netlify logo."
category: "Computer Science"
tags: ["GatsbyJS", "React", "Netlify"]
---

I've really enjoyed working with [Gatsby](https://www.gatsbyjs.org/) and [Netlify](https://www.netlify.com/) over the past few weeks, but I struggled to find good information regarding how to do AJAX form submissions with these 2 technologies and I mostly had to go through a process of trial and error. So, I'm going to hopefully remedy that.

## Form Setup

Here's a basic React/Netlify form that we'll be working with:

~~~jsx
<form 
    name="contact-form"
    id="contact-form"
    method="POST"
    data-netlify="true" 
    data-netlify-honeypot="bot-field" 
>
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact-form" />
    <div>
        <label htmlFor="name">Name</label>
        <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={e => handleChange(e)}
      	/>
    </div>
    <div>
        <label htmlFor="email">Email</label>
        <input 
            type="text" 
            name="email" 
            value={formData.email}
            onChange={e => handleChange(e)}
      	/>
    </div>
    <div>
        <label htmlFor="message">Message</label>
        <textarea 
            name="message" 
            value={formData.message}
            onChange={e => handleChange(e)}
       	/>
    </div>
    <div>
        <button 
            type="submit" 
            name="submit" 
        >
            Send Email
        </button>
    </div>
</form>
~~~

where formData and handleChange are:

~~~javascript
const [formData, setFormData] = useState({
    name: "", 
    email: "",
    message: "", 
});

const handleChange = event => {
    const key = event.target.name;
    const updatedFormValue = event.target.value;
    const newFormData = {...formData, [key]: updatedValue};
    setFormData(newFormData);
};
~~~

In this example `formData` uses React Hook, [useState](https://reactjs.org/docs/hooks-intro.html) and `handleChange` just updates our `formData` for a specific field every time a user types in one of our form fields. 

When the form in its current state is submitted the user will be brought to the page in `src/pages/success.js` of your Gatsby project or Netlify's default page if one does not exist. We instead want to stay on our current page and maybe provide some information to the user that the submission did or didn't go through.

## The Solution

To have this behavior we need to add some attributes to our form:

~~~jsx
<form 
    name="contact-form"
    id="contact-form"
    method="POST"
    onSubmit={e => handleSubmit(e)} //ADDED
    action={THIS_PAGE} //ADDED
    data-netlify="true" 
    data-netlify-honeypot="bot-field" 
>
~~~

The action attribute must be set to the target of the AJAX request. `THIS_PAGE` is just a string that represents your current URL, my form is at the base URL and I want to stay there so `THIS_PAGE` would be '/' for me. The `handleSubmit` function would look something like this: 

~~~javascript
const handleSubmit = event => {
    event.preventDefault();
    
    const form = event.target;
    fetch(THIS_PAGE, {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            "form-name": form.getAttribute('name'),
            ...formData
        })
        	.toString() 
    })
        .then(response => { //where your custom handling goes
            if (!response.ok)
                throw Error(response.statusText);

            const emptyForm = createEmptyForm(formData);
            setFormData(emptyForm);

            setStatusText("Thank you!");
        })
        .catch(error => setStatusText(`Error: ${error.message}`);
};
~~~

The body of the fetch POST request must be an object that contains a key `"form-name"` with the respective form name as the value (in this example it would be `"contact-form"`). This is necessary so Netlify knows which form it's getting data from. Your form name and data must also be encoded with something like [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams). 

~~~javascript
new URLSearchParams({
    "form-name": "contact-form",
    name: "Anonymous", 
    email: "aperson@somewhere.com",
    message: "your site sucks", 
})
	.toString(); 
//"form-name=contact-form&name=Anonymous&email=aperson%40somewhere.com&message=your+site+sucks"
~~~

Inside the `then`, after the `fetch` promise resolves is probably where you want the logic to re-render your component. This code is ran after your form is submitted to Netlify, so some basic things that would make sense to do here are checking the response status code to make sure it's valid, setting all the form fields to be empty strings, or setting a flag which renders a thank you or error message.

That's it, here's the full code for a basic Gatsby/Netlify contact form:

~~~jsx
import React, { useState } from 'react';

const THIS_PAGE = "/";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "",
        message: "", 
    });
    const [statusText, setStatusText] = useState("");
    
    const handleChange = event => {
        const key = event.target.name;
        const updatedFormValue = event.target.value;
        const newFormData = {...formData, [key]: updatedValue};
        setFormData(newFormData);
	};
    
    const handleSubmit = event => {
        event.preventDefault();
        
        const form = event.target;
        fetch(THIS_PAGE, {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                "form-name": form.getAttribute('name'),
                ...formData
            })
            	.toString();
        })
            .then(response => {
                if (!response.ok)
                    throw Error(response.statusText);

                const emptyForm = createEmptyForm(formData);
                setFormData(emptyForm);

                setStatusText("Thank you!");
            })
            .catch(error => setStatusText(`Error: ${error.message}`);
    };
    
    return (
        <>
        	<p>{statusText}</p>
            <form 
                name="contact-form"
                id="contact-form"
                method="POST"
            	onSubmit={e => handleSubmit(e)}
    			action={THIS_PAGE}
                data-netlify="true" 
                data-netlify-honeypot="bot-field" 
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact-form" />
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={formData.email}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <button 
                        type="submit" 
                        name="submit" 
                    >
                        Send Email
                    </button>
                </div>
            </form>
		</>
    );
};

export default ContactForm;
~~~

