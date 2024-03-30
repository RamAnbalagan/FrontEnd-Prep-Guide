/**
 * 
 */


/**
 * <input type="text" onkeyup="debounceFn()"/>
 * 
 */

let count = 0;
const expensiveFunction = () => {
    setTimeout(() => {
        console.log(`I am called ${count} times`);
        count++;
    },500)
}

const debounceFn = debounce(expensiveFunction, 200);

function debounce(cb, delay) {
    let timer ;
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout( () => {
            cb.call(this,...args);
        },delay);
    }
}

// edge case - we want our first keystroke / first cb to call immediately

const debounceFn = debounce(expensiveFunction, 200, true);

function debounce(cb, delay, immediate = false) {
    let timer ;
    return function(...args) {
        let shouldCallImmediate = !timer && immediate;

        if(shouldCallImmediate) {
            cb.call(this,...args);
        }

        if(timer) clearTimeout(timer);
        timer = setTimeout( () => {
            if(!immediate) {
                cb.call(this,...args);
            }
            timer = null;
        },delay);
    }
}

// diff implementation for ref

const debounce = (func, wait, immediate) => {
    // 'private' variable to store the instance
    // in closure each timer will be assigned to it
    let timeout;
  
    // debounce returns a new anonymous function (closure)
    return function() {
      // reference the context and args for the setTimeout function
      let context = this,
        args = arguments;
  
      // should the function be called now? If immediate is true
      // and not already in a timeout then the answer is: Yes
      const callNow = immediate && !timeout;
  
      // base case
      // clear the timeout to assign the new timeout to it.
      // when the event is fired repeatedly then this helps to reset
      clearTimeout(timeout);
  
      // set the new timeout
      timeout = setTimeout(function() {
  
        // Inside the timeout function, clear the timeout variable
        // which will let the next execution run when in 'immediate' mode
        timeout = null;
  
        // check if the function already ran with the immediate flag
        if (!immediate) {
          // call the original function with apply
          func.apply(context, args);
        }
      }, wait);
  
      // immediate mode and no wait timer? Execute the function immediately
      if (callNow) func.apply(context, args);
    };
  };