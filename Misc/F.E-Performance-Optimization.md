# Front-End-Performance-Optimizations
<hr>

A list of techniques / best practices / insights for the different parts of the front end.

<hr>
## Application server

* **Text Compression** : 
    - GZIP performs best on text-based assets: CSS, JavaScript, HTML.
    - All modern browsers support GZIP compression and will automatically request it.
    - Your server must be configured to enable GZIP compression.
    - All modern browsers support and automatically negotiate GZIP compression for all HTTP requests. You must ensure that the server is properly configured to serve the compressed resource when the client requests it.
* **Dead code removal** : remove all the unused code from the file and only ship what is needed, then this can often result in speed boosts. Use the 'Coverage' tab / dev tools to see which files are not really used.
* **Minification** : HTML , CSS , JS can be minified by removing `whitespace` , `code comments`, `inefficient-css-rules`

<hr>
## HTML 
  1. **HTML is parsed incrementally** 
      - Which means the  Application server can stream the HTML response to the client in bits! Flush early, flush often.
      - We essentially take advantage of the Critical rendering path to parse as and when we can, instead of waiting for the whole HTML file.
<hr>

## CSS
  1. **Rendering is blocked on CSS**
     - Get the CSS down to the client as fast as you can
     - Sometimes we deliver the css in **split** files,
   for example we deliver 50/500 styles in the first file and then load the rest later.
     - Media types and **media queries** allow us to mark some CSS resources as non-render blocking. We can put all out @Media print styles to a specific file and include it like this `<link rel="stylesheet" href="style-print.css" media="print">` this was this CSS will be non-blocking!
     ![css-render-blocking](Resources/css-render-blocking.png)
   1. **Internal vs External CSS**
     - For super fast CSS download, include some main styling elements inside the html file itself.
     - This is a trade off, between seperation of concern and speed. So tread cautiously. Might be necessary for mobile.
<hr>

## JS
  1. **Javascript blocks DOM**
     - Put your Scripts at the bottom of the page, since when JS is encountered on a page, it blocks the parsing and rendering untill it is fetched and executed
     - Avoid `doc.write`  
  2. **Async all the things**
     ![asyncjs](./Resources/async-js.png)
  3. **Profilers**
<hr>

## Images
  * **Image re-sizing**
    - Ideally, your page should never serve images that are larger than the version that's rendered on the user's screen. Anything larger than that just results in wasted bytes and slows down page load time.
    - Optimize each image.
    - Options include
      1. The main strategy for serving appropriately-sized images is called "**responsive images**". With responsive images, you generate multiple versions of each image, and then specify which version to use in your HTML or CSS using media queries, viewport dimensions, and so on
      2. Create Multiple sizes and use srcset
      3. Use an image CDN which let you generate multiple versions, either when you upload an image, or request it from your page.
<hr> 

## HTTP / TCP / DNS / Networking

  1. **Redirects are expensive**
      - On mobile it is extremely expensive
      - If one http connection takes me a second , this is gonna be almost twice as much now if a re-direct happens!
      - It means new DNS lookup + new TCP , starting all over again!

<hr>
## Mobile 

Lets say we want to break the 1000ms time barrier in Mobile.

Some facts we need to keep in mind 

1. Majority of time is in network overhead ( lets say 800 ms for 3g phones)
2. Fast server processing time is a must ( < 100ms)
3. Must allocate time for browser parsing and rendering (< 100 ms overhead)

How do we do it ?

1. Inline just the required resources
   1. No room for extra requests
   2. Idetify and inline critical css
   3. Eliminate JS from CRP
2. Defer the rest untill after 'above the fold' is visible

<hr>
## Frames

* Javascript Induced Jank needs to be reduced 
* Aggregate your scroll events and defer them
* Process aggregated events on next requestAnimationFrame callback
    - which says call me anytime a new frame starts.

<hr>
## Caching!
