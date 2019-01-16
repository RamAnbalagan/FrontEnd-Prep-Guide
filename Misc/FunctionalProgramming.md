# Functional Programming
---
Functional programming is a style of programming that attempts to pass functions as arguments(callbacks) and return functions without side-effects(changes to the program’s state).

So many languages adopted this programming style. JavaScript, Haskell, Clojure, Erlang, and Scala are the most popular among them.

And with its ability to pass and return functions, it brought so many concepts:

Pure Functions
Currying
Higher-Order functions
Immutable state.

# Pure Functions
# Currying
Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

It keeps returning a new function (that expects the current argument, like we said earlier) until all the arguments are exhausted. The arguments are kept "alive"(via closure) and all are used in execution when the final function in the currying chain is returned and executed.

Let's look at an example : 
```
function multiply(a, b, c) {
    return a * b * c;
}
```
This function takes three numbers, multiplies the numbers and returns the result.
```
multiply(1,2,3); //6
```
See, how we called the multiply function with the arguments in full. Let’s create a `curried` version of the function and see how we would call the same function (and get the same result) in a series of calls:

```javascript
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
log(multiply(1)(2)(3)) // 6
```
We have turned the multiply(1,2,3) function call to multiply(1)(2)(3) multiple function calls.

One single function has been turned to a series of functions. To get the result of multiplication of the three numbers 1, 2 and 3, the numbers are passed one after the other, each number prefilling the next function inline for invocation.

We could separate this multiply(1)(2)(3) to understand it better:

```
const mul1 = multiply(1);
const mul2 = mul1(2);
const result = mul2(3);
log(result); // 6
```

This is how mul2 could perform the multiplication operation with variables defined in the already `exit`-ed functions. Though the functions have long since returned and garbage collected from memory, yet its variables are somehow still kept "alive".

You see that the three numbers were applied one at a time to the function, and at each time, a new function is returned until all the numbers are exhausted.

>The idea behind currying is to take a function and derive a function that returns specialized function(s).

### Use Cases 

1.  Write little code modules that can be reused and configured with ease, much like what we do with npm:
    ```javascript
     // non curried function with no re-use
     function discount(price, discount) {
        return price * discount
     }
     const price = discount(500,0.10); 

      function discount(discount) {
        return (price) => {
            return price * discount;
          } 
        }
      const tenPercentDiscount = discount(0.1);
      tenPercentDiscount(500); 
    ```

2. Avoid frequentyl calling a function with the same argument.
   ```javascript
   //non curried function
    function volume(l, w, h) {
      return l * w * h;
    }
    volume(200,30,100) // 2003000l
    volume(32,45,100); //144000l
    volume(2322,232,100) // 53870400l
   //curried function
    function volume(h) {
      return (w) => {
          return (l) => {
              return l * w * h
          }
      }
    }
    const hCylinderHeight = volume(100);
    hCylinderHeight(200)(30); // 600,000l
    hCylinderHeight(2322)(232); // 53,870,400l
   ```


>https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339
# Higher-Order functions
# Immutable State