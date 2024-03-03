/**
 * Can you explain how the throttle function works and provide an example of its usage?
 * 
 */


function expensiveFunction(e) {
  if(!e) {
      console.log('Event not found');
  }
  console.log(e.x,e.y);
 }
 
 
 function throttled(cb, delay) {
  // keeps track of delay and a timmer
  let timer;
  let lastTimeCalled = 0;
  
  
  return function(...args) {
    let currTime = Date.now();
   let differenceTime = currTime - lastTimeCalled;
   let delayRemaining = delay - differenceTime ;
   
   function invokeCallBack() {
     cb.call(this,...args);
     lastTimeCalled = currTime;
   }
   
   if(delayRemaining > 0) {
     if(timer) {
       clearTimeout(timer);
     }
     timer = setTimeout(invokeCallBack, delay);
   } else {
     invokeCallBack();
   }
   }
 
 }
 
 
 document.addEventListener('mousemove', throttled(expensiveFunction, 500));
 