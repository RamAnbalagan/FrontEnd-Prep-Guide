# Basics
-------
## The Cascade, Styles,Properties
## Selectors

1 ) Standard  Selectors

  * **Universal Selector** 
    ```javascript
    //Targets all elements
    * {
      color: red;
    }
    // Targets all child elements of Paragraph
    p > * {
      color: red;
    }
    ```
  * **Element Selector** 
    ```javascript
    //Targets all elements of input type
    input {
      color: red;
    }
    // Targets elements of Paragraph
    p {
      color: red;
    }
    ```
  * **Compound Selector**
    ```javascript
    // All of the input elements, textarea elements and select elements will be affected by these properties.
    input, textarea, select {
      display : block;
      padding: 7px;
    }
    ```
  * **Class Selector**
    ```javascript
    // Way to group elements that you want to style the same way.
    // All elements with class1 will be targetted.
    .class1 {
      background : aqua;
    }

    // All paragraph elements with class1 will be targetted.
    p.class1 {
      background : aqua;
    }
    ```
  * **ID Selector**
    ```javascript
    // Used to target a single unique element on a page.
    #ad1 {
      width: 768px;
    }
    // All Paragraph elements with id = ad1 will be targetted.
    p#ad1 {
      width:768px
    }
    ```

> Using div#ad1 { } is a good way to visually let yourself know that you are targetting a div of id=ad1 , although id by itself would suffice.

2) Combinator Selectors
   
    | Combinator     | Name          |
    | -------- | -------------- |
    | ```div p { }```  | Any Descendant combinator|
    | ```div > p { } ``` | Direct Child combinator  |
    | ```div + p { }``` | Adjacent Sibling combinator |
    |```div ~ p {}``` | General Sibling combinator|

    ![Markdown Logo](https://github.com/RamAnbalagan/FrontEnd-Prep-Guide/blob/master/Misc/Resources/Adjacent%20sibling.png)
## Specificity
## The Box Model
## Positioning
## Float & Display