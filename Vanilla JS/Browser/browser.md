# Browser
--------
  ### HTTP Requests
  ### DOM Manipulation

  DOM stands for document object model.
  It can be thought of Tree of nodes/elements created by the browser.
  The DOM elements are all object oriented, meaning you cna add and remove properties and JS can be used to read/write/manipulate to the DOM

  ##### Examine the document Object
  ```javascript
  document.domain  // wwww.google.com"
  document.URL     // "https://www.google.com/"
  document.title   // Google
  document.doctype // <!doctyle html>

  document.body // Returns the Body node.
  document.head // Returns the Head node.
  document.all  // gives us a collection of all the HTML Nodes in the document
  document.forms // Collection of all the forms
  document.links // Collection of all the links
  document.images // COllection of all the images
  ```

  ##### DOM Selectors : with examples

  ```javascript
  document.getElementById('main-header'); // Get Element by ID

  // Get Element by Class Name
  let items = document.getElementByClassName('list-group-item');
    for(var i = 0; i<items.length ; i ++) {
      items[i].style.backgroundColor = 'yellow';
    }

  // Get Element by Tag Name 
  let listItems = document.getElementsByTagName('li');
  let listItemsArray = Array.from(listItems);  

  // QuerySelector : Can query by most of the type of selectors.

  document.querySelector('#main-header');                  // ID
  document.querySelector('.list-group-item');              // Class
  document.querySelector('input[type="submit"]');          // CSS class
  document.querySelector('input');                         // Tag
  document.querySelector('.list-group-item:nth-child(2)'); // CSS-PseudoClasses 

  // QuerySelectorAll : Going to grab more than one element, with any type of selector. Returns a node-list

  var odd = document.querySelectorAll('li:nth-child(odd)');
  var even = document.querySelectorAll('li:nth-child(even)');

  for(var i =0 ; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'blue';
    even[i].style.backgroundColor = 'grey';
  } 
  ```

  ##### Style Change

  ```
  var headerTitle = document.getElementById('main-header');
  headerTitle.style.borderBottom = 'solid 3px #000';
  headerTitle.style.backgroundColor = 'yellow';
  ```

  ##### Traversing the DOM 
  >We prefer to use the Element methods over the Node ones.

  Fetching the ParentNode and ParentElement
  ```javascript

  // Parent Node
  var itemList = document.querySelector('#items');
  var parent = itemList.parentNode ;
  parent.style.backgroundColor = 'grey';
  var grandParent = itemList.parentNode.parentNode;
  // Parent Element
  var itemList = document.querySelector('#items');
  var parent = itemList.parentElement ;
  parent.style.backgroundColor = 'grey';
  var grandParent = itemList.parentElement.parentElement;
  ```

  Fetching the ChildNodes and Children
  ```javascript
    // A node list that includes even lineBreaks as  Textnodes
    itemList.childNodes ;
    // A HTMLCollection that doesn't include the linebreaks - RECOMMENDED!
    itemList.children;
    // FirstElementChild : First child in the children collection
    itemList.firstElementChild
    // lastElementChild : last child in the children collection
    itemList.lastElementChild
  ```

  Fetching the Siblings
  ```javascript
  itemList.nextElementSibling;
  itemList.previousElementSibling;
  ```

  Creating Elements
  ```javascript
  // Create a new element
  var newDiv = document.createElement('div');
  // Add class
  newDiv.className = 'hello';
  // Add id 
  newDiv.id = 'hello1';
  //Add attr
  newDiv.setAttribute('title','hello div');
  // Create a text node
  var newDivText = document.createTextNode('Hello World');
  // Add text node to div
  newDiv.appendChild(newDivText);
  // Insert into the actual DOM
  var container = document.querySelector('header .container');
  var h1 = document.querySelector('header h1');
  container.insertBeofre(newDiv,h1);
  ```

  ##### Difference between HTMLCollection , NodeList Array
  
  An HTMLCollection is a list of nodes. An individual node may be accessed by either ordinal index or the node’s name or id attributes.
  Collections in the HTML DOM are assumed to be live meaning that they are automatically updated when the underlying document is changed.

  A NodeList object is a collection of nodes. The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live or static based on the interface used to retrieve them

  But remember that neither HTMLCollectionnor NodeList support the array prototype methods like push pop or splice methods . Iterator methods like forEach have been recently added though and latest browsers might support them.

  > To convert HTML / Node lists to an JS array, use one of the following ways

  ```javascript
  Using Array.from()

  const nodelist = document.querySelectorAll('.divy');
  const divyArray = Array.from(nodelist);


  Using ES6

  const divyArray = [ ...document.querySelectorAll('.divy')];


  Using Array.slice()

  const divyArray = Array.slice.call(nodelist);
  ```
  ----
  ### Events : Handling, Delegation / Bubbling
  Handling Events
   
  1. Adding an EventListner
      ```javascript 
      var button = document.getElementById('button').addEventListener('click',buttonClick);

      function buttonClick() {
        console.log('Button Clicked');
      }
      ```
  2. Using the Event Parameter : e.target
      ```javascript 
      var button = document.getElementById('button').addEventListener('click',buttonClick);

      // We can pass in the event and use properties on that , to perform more logic.
      function buttonClick(e) {
        // Gives us the actual element that is clicked
        console.log(e.target); 
        console.log(e.target.id);
        console.log(e.target.classList);

        // Type of event 
        console.log(e.type);

        // Position of mouse when clicked, from the window/browser
        console.log(e.clientX); 
        console.log(e.clientY);
        // Position of mouse when clicked, from the actual window itself
        console.log(e.offsetX); 
        console.log(e.offsetY);
      }
      ```
3.  Type of Events 
  
    **Mouse events**
    ```javascript
    var button = document.getElementById('button');
    var box = document.getElementById('box');

    button.addEventListener('click',runEvent);
    button.addEventListener('dblclick',runEvent);
    button.addEventListener('mousedown',runEvent);
    button.addEventListener('mouseup',runEvent);

    // Any time you move the mouse
    box.addEventListener('mousemove',runEvent);
    // when you hover over an element, this func runs
    box.addEventListener('mouseenter', runEvent);
    box.addEventListener('mouseleave', runEvent);
    // When you hover over an element or it's child, this func runs
    box.addEventListener('mouseover',runEvent);
    box.addEventListener('mouseout',runEvent);


    function runEvent(e) {
      console.log('Event Type :' + e.type);
      // Cool stuff to track the mouse movement
      output.innerHTML = '<h3> MouseX : ' + e.offsetX + '</h3><h3> MouseY : ' + e.offsetY + '</h3>';

      // cool color stuff around the mouse movement
      documen.body.style.backgroundColor = "rgb("e.offsetX+","e.offsetY+",40)";
    }
      ```
    **Keyboard events**
    ```javascript
    var itemInput = document.querySelector('input[type="text"]');
    var form = document.querySelector('form');

    // DIfferent types of KB events , use one at a time and try them out
    itemInput.addEventListener('keydown', runEvent);
    itemInput.addEventListener('keyup', runEvent);
    itemInput.addEventListener('keypress', runEvent);
    itemInput.addEventListener('focus', runEvent);
    itemInput.addEventListener('blur', runEvent);
    // Fires an event off on data being cut / pasted.
    itemInput.addEventListener('cut', runEvent);
    itemInput.addEventListener('paste', runEvent);
    // Will run when we do anything with this element
    itemInput.addEventListener('input', runEvent);
    itemInput.addEventListener('change', runEvent);
    form.addEventListener('submit', runEvent);

    function runEvent(e) {
      // used to prevent the default submission that happens when you click submit on form
      e.preventDefault();
      console.log('Event Type :' + e.type);
      console.log('Value' + e.target.value);
    }
    ```

  #### Event Propagation : Capturing +  Bubbling

  * Document events or document element events either bubble up / trickle down( capture) the DOM tree and trigger Event handlers of parents,grandparents in the case of bubbling or children and grand-children in the case of capturing.
  * Event propogation provides an alternative way to handle events : Instead of handling events on a specific div , we can choose to handle it at a more higher level, making it more efficient and cleaner.
  * The following document events don't propogate : ```Focus , blur and Scroll.```
  * Default mode is Bubbling ( From bottom to top )

  **Capture** : Phase 1 
  When you click on an element, the browser goes from top down and stores all the elements from the top of the dom to where you clicked. 
  The event is not fired yet.

  ```javascript
  button.addEventListener('click', handleClick(), true) ;
  ```
  
  **Bubbling** : Phase 2
  Triggering the event bottom to top.

  When you perform a click on an object, you essentially click on all it's parent element, which is why when you click on an ```li``` element, you also click on it's parent ```div```, and also on the ```body``` and so on.
  ```javascript
  button.addEventListener('click', handleClick(), false) ;
  ```

  You don't always see them, because you are not listening for a click on those elements.
  ```javascript
  var parent = document.querySelector('.container');
  parent.addEventListener('click', handleCLick());

  handleClick(e) {
    //e.target is the element that was clicked.
    // Here upon click we toggle the CSS class 'redtext' on the child that was clicked.
    e.target.classList.toggle('redtext');
  }
  ```

  **Propagation** :

  You can stop event propogation and stop triggering the events following the current event.

  ->You can use this on the way down / on the way up.

  -> You can use the ```once``` option and unbind an event after it runs once.

  ```javascript
  var parent = document.querySelector('.container');
  parent.addEventListener('click', handleCLick());

  handleClick(e) {
    //e.target is the element that was clicked.
    // Here upon click we toggle the CSS class 'redtext' on the child that was clicked.
    e.target.classList.toggle('redtext');

    //Stop propogating either UP or Down
    e.stopPropagation();
  }
  ```

  ### Global Object , Window Object
  ### Timers
  ### Event Listeners
  ### Throttling / Debouncing