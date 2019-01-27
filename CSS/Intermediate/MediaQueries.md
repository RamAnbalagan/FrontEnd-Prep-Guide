# CSS Media Queries 
-----
Media queries are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).

Media queries are used for the following:

* To conditionally apply styles with the CSS `@media` and `@import` at-rules.
* To target specific media for the `<link>`, `<source>`, and other HTML elements.
* To test and monitor media states using the Window.matchMedia() and MediaQueryList.addListener() JavaScript methods.

-----

Examples

1. When screen is small , like a smart phone.
   Background would be red in this case , as long as width<=500px
    ```javascript
    @media (max-width: 500px) {
      body{
        background: red;
      }
    }
    ```
2. When screen is wide screen
   Background would be green in this case , as long as width>=1200px
   ```javascript
    @media (min-width: 1200px) {
      body{
        background: green;
      }
    }
    ```
3. When screen is a tablet, it changes all  of body element to yellow.
   with any width ranging from 501 pix to 1199 px
   ```javascript
    @media (max-width: 1199px) and (min-width: 501px) {
      body{
        background: yellow;
      }
    }
    ```
----
`@media only screen ( )` applies it only to screen
`@media ()` is the default syntax and it applies it to all media!