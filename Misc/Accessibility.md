# Accessibility
<hr>
## Why accessibility ?

Accessibility is the practice of making your websites usable by as many people as possible — we traditionally think of this as being about people with disabilities, but really it also benefits other groups such as those using mobile devices, or those with slow network connections.

You could also think of accessibility as treating everyone the same, and giving them the same opportunities, no matter what their ability or circumstances. In the same way that it is not right to exclude someone from a physical building because they are in a wheelchair (public buildings generally have wheelchair ramps or elevators these days), it is also not right to exclude someone from a website because they have a visual impairment. We are all different, but we are all human, and therefore have the same (human) rights.

**Benefits**
* Semantic HTML (which improves accessibility) also improves SEO, making your site more findable/marketable.
* Caring about accessibility demonstrates good ethics/morals, which improves your public image.
* Other good practices that improve accessibility also make your site more usable by other groups, such as mobile phone users, those on a low network speed, etc. In fact, everyone can benefit from many such improvements
* It helps disabled people.
* It is the law in certain places.

**What kinds of Disablities are we looking at?**
 * Visual impairments ( color blind, blind , low level vision). Solved with screen readers, contrast colors.
 * Hearing impairments ( low hearing to none ). solved with captions, transcripts.
 * Mobility impairments ( paralysis , loss of limb , weakness, old age). Affects mouse usage. Solved by keyboard tabbing
 * Cognitive impairments ( mental illnesses and cognitive impairment). Solved with good design and consistency. simplicity.

**Project based decisions to keep in mind**
* Consider accessibility from the start of a project, and test early and often. Just like any other bug, an accessibility problem becomes more expensive to fix the later it is discovered.
* Bear in mind that a lot of accessibility best practices benefit everyone, not just users with disabilities. For example, lean semantic markup is not only good for screen readers, it is also fast to load and performant, so better for everyone, especially those on mobile devices, and/or slow conections.
* Publish an accessibility statement on your site and engage with people having problems.
<hr>
## Accessibility Tree
![atree.jpg](Resources/atree.jpg)
This is basically what the browser actually presents to the screen reader. The browser takes the DOM tree and modifies it into a form that is useful to assistive technology. We refer to this modified tree as the Accessibility Tree.

You might visualize the accessibility tree as looking a bit like an old web page from the '90s: a few images, lots of links, perhaps a field and a button.

![google1998.png](Resources/google1998.png)

**Flow for Accessibility tree creation**
  1. The browset exposes a semantic version of its UI to screen reader via an API.
  2. A screen reader creates an interface in which the user hears a spoken representation of the app.
  3. The assistive technology may also allow the user to interact with the app in a different way. For example, most screen readers provide hooks to allow a user to easily simulate a mouse click or finger tap.
  4. The assistive technology relays the user intent (such as "click") back to the app via the accessibility API. The app then has the responsibility to interpret the action appropriately in the context of the original UI.
<hr>
## HTML and accessibility

###1. Semantic HTML
>This means using the correct HTML elements for their correct purpose as much as possible.

The reason Semantic HTML is a game-changer is because 
* In built keyboard accessibility. They can be tabbled and activated using enter.
* Easier to read and develop.
* Better on mobile.
* Good for SEO.

**Non semantic Example**
```javascript
<font size="7">My heading</font>
<br><br>
This is the first section of my document.
<br><br>
I'll add another paragraph here too.
<br><br>
1. Here is
<br><br>
2. a list for
<br><br>
3. you to read
<br><br>
<font size="5">My subheading</font>
```
Here the screenreader hasn't got anything to use as signposts, so you can't retrieve a useful table of contents, and the whole page is seen as a single giant block, so it is just read out in one go, all at once.

**Semantic Example**
```javascript
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<ol>
  <li>Here is</li>
  <li>a list for</li>
  <li>you to read</li>
</ol>

<h2>My subheading</h2>
```
The screenreader reads each header out as you progress through the content, notifying you what is a heading, what is a paragraph, etc.
It stops after each element, letting you go at whatever pace is comfortable for you.
You can jump to next/previous heading in many screenreaders.
You can also bring up a list of all headings in many screenreaders, allowing you to use them like a handy table of contents to find specific content.

**Layout creation**

Use semantic tags like `<main>` `<footer>` `<article>` `<section>` `<header>` `<nav>` for creating layouts, instead of relying on things like table layouts.

**UI controls**
Use links, buttons, form elements, and labels appropriately (including the `<label>` element for form controls).

However, it is again the case that people sometimes do strange things with HTML. For example, you sometimes see buttons marked up using `<div>`s, for example.

You immediately lose the native keyboard accessibility you would have had if you'd just used `<button>` elements, plus you don't get any of the default CSS styling that buttons get.

###2.Keyboard accessibility

We can add back keyboard accessibility to even elements which don't have keyboard tabbing built it by default ( like `divs` for buttons), by using the `tabindex` attribute.

```javascript
<div data-message="This is from the first button" tabindex="0">Click me!</div>
<div data-message="This is from the second button" tabindex="0">Click me too!</div>
<div data-message="This is from the third button" tabindex="0">And me!</div>
````

>**Tab Index is an attribute primarily intended to allow tabbable elements to have a custom tab order, instead of just being tabbled through in their default source order, so this must be used only if you need to(for elements which are no in the tab order itself)**

* `tabindex="0"` - allows elements that are not normally tabbable to become tabbable. this is the most useful trick for elements like `divs`
* `tabindex="-1"` - this allows not normally tabbable elements to receive focus programmatically, e.g. via JavaScript, or as the target of links.

Whilst the above addition allows us to tab to the buttons, it does not allow us to activate them via the Enter/Return key. To do that, we had to add the following bit of JavaScript trickery:

```javascript
document.onkeydown = function(e) {
  if(e.keyCode === 13) { // The Enter/Return key
    document.activeElement.click();
  }
};
```
Here we add a listener to the document object to detect when a button has been pressed on the keyboard. We check what button was pressed via the event object's keyCode property; if it is the keycode that matches Return/Enter, we run the function stored in the button's onclick handler using `document.activeElement.click()`. activeElement gives us the element that is currently focused on the page.

This is a lot of extra hassle to build the functionality back in. And there's bound to be other problems with it. **Better to just use the right element for the right job in the first place.**

### 3. Meaningful text labels
You should make sure that your button and link text labels are understandable and distinctive. Don't just use "Click here" for your labels, as screenreader users sometimes get up a list of buttons and form controls.

Controls being listed in VoiceOver on mac
![voiceover-formcontrols](Resources/voiceover-formcontrols.png)

## ARIA

Accessible Rich Internet Applications or shortly referred to as ARIA is a specification standard that aims at making the web easily accessible to humans.

### Landmark Roles

One of the easiest ARIA features to implement, and one that provides significant immediate benefits to screen reader users, is landmark roles. There are eight of these roles, each representing a block of content that occurs commonly on web pages. To use them, simply add a relevant role attribute to an appropriate container within your HTML. Then, screen reader users can quickly jump to that section of the page. 

* role=”banner”
* role=”navigation” (e.g., a menu)
* role=”main” (the main content of the page)
* role=”complementary” (e.g., a sidebar)
* role=”contentinfo” (meta data about the page, e.g., a copyright statement)
* role=”search”
* role=”form”
* role=”application” (a web application with its own keyboard interface)

> **There can be only one role of each type per web page. meaning the role is unique**

If a role is used more than once on a page, the aria-label attribute should also be used in order to distinguish between the two regions. For example, a web page might have the following two navigation regions:

* `<div role=”navigation” aria-label=”Main menu”>`
* `<div role=”navigation” aria-label=”User menu”>`

<hr>
## Labeling links


