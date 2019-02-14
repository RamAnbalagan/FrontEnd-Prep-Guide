# HTTP Caching
<hr>
HTTP caching occurs when the browser stores local copies of web resources for faster retrieval the next time the resource is required. As your application serves resources it can attach cache headers to the response specifying the desired cache behavior.

![Caching-3](Resources/Caching-3.jpg)

## Use cache to
* improve performance and stability
* reduce server load
* fault tolerance

## HTTP cache headers

* `Cache-Control`
  The `Cache-Control` header is the most important header to set as it effectively ‘switches on’ caching in the browser. With this header in place, and set with a value that enables caching, the browser will cache the file for as long as specified. Without this header the browser will re-request the file on each subsequent request.

  The value of the Cache-Control header is a composite one, indicating whether the resource is public or private while also indicating the maximum amount of time it can be cached before considered stale. The max-age value sets a timespan for how long to cache the resource (in seconds).

  `Cache-Control:public, max-age=31536000`
  <br>
* `Expires`
  When accompanying the `Cache-Control` header, `Expires` simply sets a date from which the cached resource should no longer be considered valid. From this date forward the browser will request a fresh copy of the resource. Until then, the browsers local cached copy will be used.<br>
  `Cache-Control:public`
   `Expires: Mon, 25 Jun 2012 21:31:12 GMT`  

>**If both Expires and max-age are set max-age will take precedence.**

## Conditional requests
  Conditional requests are those where the browser can ask the server if it has an updated copy of the resource. The browser will send some information about the cached resource it holds and the server will determine whether updated content should be returned or the browser’s copy is the most recent. In the case of the latter an HTTP status of 304 (not modified) is returned.

  ![Caching-4](Resources/Caching-4.jpg)


## E-Tags
   * Client makes a request
   * Server responds with response + an E-tag
  ![](Resources/Caching-1.png)
  * when client makes the same service call again, it sends over the e-tag as well
  * Server uses the e-tag and checks if response changed.
  * If it didn't it sends back a `304` not modified response.
  * this saves a lot of bandwidth!
  ![](Resources/Caching-2.png)

  **Cons on E-tags**
  * when the app servers are behind load-balancers, the e-tags might be registered as the same amongst different servers.
  * 