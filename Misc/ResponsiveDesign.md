# Responsive design
-----
Responsive design is basically using HTML/CSS to make a website or app layout adapt to different screen sizes.

A few years ago it was a luxury, but now it is a necessary with smart phones!

<hr>
## Different ways to achieve responsive design
 **Set the viewport / scale**
* **Use fluid widths as oppose to fixed ( max -width instead of width)**
* **Media queries - Different css styling for different screen sizes. Most important method.**
* **Rem units over px**
* **Mobile first method**

---
## Viewport

What is a view port ?

Essentially a view port is the size of the window you are viewing on. It is usually the size of the browser that you can see displaying the page, you can change it's size by moving it lets say.

![viewport](Resources/viewport.png)

In the case of a mobile screen, it is a little tricky.
Because even though it seems like the browser on a mobile phone seems to take up the whole screen, it is not the case. It usually ends up taking lesser space than the max screen size available!

![mobileViewport](Resources/mobile&#32;viewport.png)

What happens is that a 980px viewport of safari is squashed into a mobile phopne of around 320 px. Now all though it will fit in the phone , it will be super tiny and will be a terrible UX. 

Now if we don't over-ride the viewport metatag in the html page, then we would still retain the viewport size of 980 from the browser with all our content shrunk into the mobile phone, this would render all the responsive CSS useless, flexbox would not helpful in that case. 

So we need to reduce the default browser viewport size to match the device width of a phone basically! 

`<meta name="viewport" content="width=device-width,initial-scale=1.0">`