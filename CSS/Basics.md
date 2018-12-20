## Basics
--------
### The Cascade, Styles,Properties
### Selectors
### Specificity
### The Box Model
### Positioning

When we need to shift things left and right, we used `margin left` and `margin right`.
 To center an element we use `margin: 0 auto`

 We can't really rely on that because margins and paddings affect other elements around the element you apply it on.

 Applying positions however impact the exact element we are dealing with.

 There 5 positions values in CSS

 1. Static : Default value in CSS.
    After applying a position in CSS, we can use top and left to that element to move it around.
 2. Fixed : When you apply fixed to an element, you take it out of the flow of the document and you can control it using ```top``` and ```left```
    It can overlap and doesn't really care about other elements. It does not move regardless of what happens, including scrolling or othre elements.

    Usually used for Nav bars.
  1. Inherit : It's just going to inherit the position from the parent.
  2. Absolute :
    It's going to take it out of the flow of the document fix it to the position similar to `fixed` but one difference is that it is not fixed to the location, if you scroll it moves along with all other elements.
    When you give an element Absolute positioning, it positions an element relative to the nearest element that is not staticly positioned.
    Going by this logic, an absolute element has a parent, which is by default the browser, if there is a closer parent( an element with some positioning other than static) then it choses that as the parent.
    
    .box2 {
      background : lightpink;
      position: absolute;
      top:0;
      left:0;
    }
  3. Relative :Positions it relative to the default position of the element in the document.
  For example in this case, we would be position the element box 50px below the current position and 50px right .

    
    .box3 {
      background : lightpink;
      position: absolute;
      top:50;
      left:50;
    }
    
    


  Difference between absolute and relative :
    1 - The starting point
        *  Absolute starts at top left of browser / parent
        *  Relative starts at where it would have been at in the flow of the document.
    2 - When it comes to using Relative - Space is not taken up by other elements.

  Z-Index : The `z-index` is used to specify the order of stacking when it comes to overlapping elements. A higher Z-index means that element is on top of the lower Z-indexes. Also these Z-indexes can only be applied if the element is `relative, absolute or fixed`.

  [Example Fiddle : #1](https://jsfiddle.net/619xqzj3/823/)
  [Example Fiddle : #2](http://jsfiddle.net/jcolicchio/Q6yN7/)

### Float & Clears 

Options for `float` are `float: none` `float: left` `float: right`.

Float is used to take an element ( usually an image ) and make it float,  and all other elements in the flow of the document go underneath it. kinda like how a cloud would float in the sky and everything is under it.

>However text does not go under neath it. It wraps around it.

####Initial intention of **Float**
A common technique to position content, either very left or very right.
It takes the element out of the flow of the content.

If you float an image and have some text around it 

```
img {
  float: left;
  margin: 10px;
}
```
The text wraps around it and you get a better looking document page.

#### Other uses : 

If we float an element to lets say the right, then other elements might take it's place because the element is taken out of flow.

#### Clears

`clear:both` is used to to specify the fact we don't want an element to be under floating items. When used it forces an element to stay clear of floating items, meaning it does not go under it and starts after the element.

So it is used on items neigboring floating items, forcing a new line.

