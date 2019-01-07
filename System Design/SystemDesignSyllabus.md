# System Design
-----

TechSith
---------
 i18n,
   build,
    devops,
     testing frameworks,
      session/cookie/local storage ,
         authentication,
            ssl cert,
              package management,
               semantic versioning﻿


FE Specific topics
--------
Asynchronos calls , tasks
REST
Responsive web design
UX 
**Layout** : if you’re designing a system used by multiple development teams, you need to think about building components and if you require teams to follow a consist markup to use said components. 
State management such as choosing between unidirectional data flow or two-way data binding. You should also think about if your design will follow a passive or reactive programming model, and how components related to each other for example Foo–> Bar or Foo –>Bar.
**Multi-device support** – Will your design use the same implementation for the web, mobile web, and hybrid apps or will they be separate implementations? If you were building a site like Pinterest, you might consider three columns on the web but only one column on mobile devices. How would your design handle this?
**Asset delivery**– In large applications, it’s not uncommon to have independent teams owning their own codebases. These different codebases probably have dependencies on each other and each usually has their own pipeline to release changes to production. Your design should consider how assets are built with dependencies (code splitting), tested (unit and integration tests) and deployed. You should also think about how you will vend assets through a CDN or inline them to reduce network latency.

bundlers 
packagemanagers
JS modules
Version control
Testing

Web performance 
-------------
critical rendering path
minification
code splitting
bundling 
reduce large libraries - dependency 
improving perceived page performance
 - loading spinners
 - Progress bar
 - Showing basic page without styles

Defer javascript tags - put it in the body, at the bottom or use ASYNC tag

service workers
image optimizations
lazy loading 
implications of http/2 and server-push
when to pre-fetch and preload resources
reduce browser reflows and when to promote an element to the GPU
differences between the browser layout, compositing and painting

General system design
---------
CAP theorem
Client
DNS
CDN
Web server
Load balancer
Queue
Memory cache
database 


Misc topics 
-------
API design
HTTP requests - Get and Post along with associated headers such as cache-control, ETag, Status codes, and transfer - encoding.
Rest vs RPC vs SOAP
Security - when to use JSONP, CORs and iFrame policies 
Accessibility
serverside vs client side rendering and unversal rendering
Progressive web apps
