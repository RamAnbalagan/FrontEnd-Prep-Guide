# SCOPE

## What is Scope?
  
  > Scope : Where to look for things ?
  The ability to store values and pull out values out variables is what gives a program state. With the inclusion of variables in our program, we beget the most interesting questions. 
   * Where do they live, where are they stored, how does our program find them when we need them ? <br>
  * We call these set of rules : Scope.

  **Role of the compiler**
  JS is a compiled language, it's not the same as C++ or Java.
  The primary difference is that the binary format ( .exe ) is not distributed.
  So it is compiled every single time it is run.

  The difference between compiled and interpretted language, is that when it is running line 3 , it has no idea what to expect on line 4. Top to bottom , line by line.

  In JS, it does do an initial pass through from top to bottom and go through all the code, before actually beginning it's Interpretation ( one more run , where execution happens.) So it has looked at line 4 , before it executes line 3.

  **Finding declarations of variables and functions**
  
  As mentioned, there will be two passes.
  * Overall compiler pass.
  * Individual interpreter line by line execution.
  
  **Example code**
  ```javascript
  1. var foo = 'bar';       

  2. function bar () {
  3.  var foo = 'baz';
  4. }

  5. function baz(foo) {
  6.  foo = 'bam';
  7.  bam = 'yay';
      }
  ```

   `var foo = bar` is actually two different statements, that happen in two different program runs.
  **Conversation between compiler and Friends**

  Compiling
  ```
  1. Compiler : Ah, I see a variable declaration for an identifier called 'Foo', which scope am I in ? Okay, global scope. So I am going to register Foo in global scope ( ignoring 'bar' the RHS assignment.)
  2. Compiler : Ah the next declaration is on line 2,  a function  called 'bar()' , lets register the function in the scope. We would compile the contents of the function.
  3. Compiler : Ah I see a new variable declaration for an identifier called 'foo' in the scope of bar() on line 3.
  4. Compiler : On line 5, I found a function called 'baz' , its a function declaration that I would like to add into global scope. We can now compile the contents of baz()
  5. Compiler : On line 5, I found a variable declaration called 'foo' in the scope of Baz()

  ```
  Execution 
  ```
  1. Interpreter : "Hey global scope, I have an LHS for variable `foo`, have you heard of it ?"
  2. Global Scope : "Yeah, I've got him! "
  3. Interpreter : "Okay, I'm going to copy my RHS into the LHS reference that you gave me."
      // pretend that bar() and baz() are being called from elsewhere.
  4.  Interpreter : "Hey Scope of Bar, I have an LHS for variable 'foo' On line 3, have you heard of him?"
  5. Scope of bar : "Yeah, here you go!"
  6. Interpreter : "Okay, I'm going to assign the value of 'bar' into the LHS provided"
  7. Interpreter : "Hey Scope of baz, I have an LHS for variable 'foo' On line 5, have you heard of him?"
  8. Scope of Baz : 'Yeah , here you go!';
  9. Interpreter : "Oh on line 6, I found a RHS of 'bam', I'm going to assign it to the variable foo in the scope of baz.
  10. Interpreter : "Hey Scope of baz, have you heard of this LHS reference 'bam' that I found on line 7? "
  11. Scope of Baz : "Nope, I haven't"
  12. Interpreter : "Oh damn, okay. Let's go out one level now. Hey Global scope , have you heard of Bam ? "
  13. Global Scope  : "Yes, I just created them for you!" ( Since non-strict mode)
  14. Interpreter : "Alright! Lets assign the RHS of 'yay' to global.bam"
  ```
> When you have a unknown RHS assignment, the global scope does not create a new reference for that , it throws an reference error , in both strict and non-strict mode.

Example : 
```javascript
var foo = 123
function bar(){
  var foo = 345;
  function baz() {
    console.log(foo);
  }
}
boo = 345 // global scope does create a new reference called boo
baz() // REFERENCE ERROR , global scope does not create RHS unknown references
```
## Function Declarations vs Function Expressions

The way you distinguish them , is if the `function` keyword is the first thing in the line then it is a function declaration! If not it is an expression.

Expression : var foo = function bar () { }
Declaration : function bar () { }

Function declarations get hoisted! whereas function declarations don't , since they are on the RHS of the assignment! Since only the LHS get's hoisted! 

> **The important difference is that with Function expressions, it is enclosed within it's own scope.It is not accessible by it's parent. So the function doesn't live outside. Whereas function declarations live in the outer scop where they are defined!** 

https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/

<br>**3 negatives to Anonymous function expressions**
1. No way to refer to the function, from inside the function. Can't do recursion or reset.
2. No self documented name, makes code less readable.
3. Cannot debug in a minified code environment if it is anonymous!

>**Always use named function expressions over Anonymous function expressions**

## Let vs Var , Hoisting

`let` keyword attaches a variable implicitly to whichever block it appears in scope wise!

It hijacks the block scope of the block it is used in!

It is incredibly powerful because it lets us put variables as close and as deep as we like next to the place needed! There is value both stylistically , performance wise and also lesser errors!

**Problems with the Let keyword**
1. The Let keyword doesn't hoist! So you've gotta put all your lets at the top!
2. You've gotta think more about blocks now. So there is extra mental tax.
3. Implicit scope blocks (let) are harder to maintain than explicit scope blocks.

**Hoisting**

Hoisting is a mental construct that we have invented to better explain and understand how JS works! It doesn't exist in reality.

Declarations of variables and functions are being handled in Compile time and we move them to the top in the code since they are being handled first!

> Lets don't hoist!
> Functions are hoisted over Variables!
<br>
Actual code!
```javascript
var a = b ();
var c = d ();
a;
c;
function b() {
  return c ;
}
var d  = function () {
  return b ();
}
```
<br>
Hoisted Code
```javascript
function b() {
  return c ;
}
var a ;
var c ;
var d ;
a = b ();
c = d ();
a ;
c;
d = function () {
  return b ();
};
```
> Function expressions do not get hoisted! Only function declarations do.

**Why is JS doing all of this hoisting, why do we have to do this, and make coding harder ?**

Mutual recursion ( where two functions call each other) would be impossible without hoisting, since one of them would be declared too late.

Catch block has been block scoped from ES3 , althought it was introduced everywhere only from ES6
```javascript
var foo;
try {
  foo.length;
}
catch(err){
  console.log(err);
}
console.log(err); // ref error
```
## IIFE
IIFE stands for Immediately invoked function expressions! 
It is an expression, since the first word in the line is the `(` and not `function`.

The IIFE pattern wraps some code in  parenthesis and immediately invokes it, it also creates some lexical scope for the code inside it and hides it from outside scope.

In the example below, `var foo` does not pollute the outside global scope,rather stays inside the function scope.
```javascript
var foo = 'foo';
(function() {
    var foo = 'foo2';
    console.log(foo); // foo2
})();
console.log(foo);  // 'foo'
```
> **The function could be Anonymous or Named!**

**Useful variations of IIFE**
1. Call an IIFE like you would a function
   ```javascript
   var foo = 'foo';
   (function(bar){
      var foo = bar;
      console.log(foo); // foo
   })(foo);
   console.log(foo); // foo
   ```
## Dynamic vs Lexical

Two models of scoping! Lexical scope model is the predominant model that is present in most langs and the one we were discussing! 

![lexical](../../Misc/resources/lexical.png)

Dynamic scope is rare and langs like Bash and Pearl use it! It does not exist in Javascript.

>**Lexical refers to Compile time scope!**
The decisions for scope were made during your lexing process during compilation! It's written in stone at the stage of compilation.

**Cheating the Lexical scope model**
1. **eval keyword**
      ```javascript
      var bar = 'bar';
      function foo(str){
        eval(str);        //cheating!
        console.log(bar); //42
      }
      foo("var bar = 42;");
      ```
    The `eval` keyword is also going to slow ur compilation!
    Better to avoid this keyword altogether!
2. **With Keyword** 
   ```javascript
   var obj = {
     a:2,
     b:3,
     c:4
   };

   obj.a = obj.b + obj.c;
   obj.c = obj.b - obj.a;

   with(obj) {
     a = b + c ;
     c = b -a;
     d = 3;  // ??
   }

   obj.d // undefined 
   d; // 3 -- global! oops
   ```
   Used to shorthand object access.
   Better to avoid this keyword as well, since you disable optimizations on the compiler as well and throws sc
## Closures
## 'this' keyword
`this` binding is a constant source of confusion for the JavaScript developer who does not take the time to learn how the mechanism actually works. Guesses, trial-and-error, and blind copy-n-paste from Stack Overflow answers is not an effective or proper way to leverage this important this mechanism.

To learn this, you first have to learn what `this` is not, despite any assumptions or misconceptions that may lead you down those paths. `this` is neither a reference to the function itself, nor is it a reference to the function's **lexical scope**.

**this** is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called. So, if you're trying to diagnose `this` binding, use the developer tools to get the call-stack, then find the second item from the top, and that will show you the real call-site.

#### 4 Rules to determine `this`
1) **Default Binding** : standalone function invocation.
    >If strict mode is in effect, the global object is not eligible for the default binding, so the this is instead set to undefined.

2) **Implicit Binding** : 
   ```javascript
    function foo() {
      console.log( this.a );
    }

    var obj = {
      a: 2,
      foo: foo
    };
    obj.foo(); // 2
   ```

   ```javascript
   function foo() {
	  console.log( this.a );
   }

    var obj = {
      a: 2,
      foo: foo
    };

    var bar = obj.foo; // function reference/alias!

    var a = "oops, global"; // `a` also property on global object

    bar(); // "oops, global"
   ```
3) **Explicit Binding**
4) **`new` binding**

**Determining this**

Now, we can summarize the rules for determining this from a function call's call-site, in their order of precedence. Ask these questions in this order, and stop when the first rule applies.

1. Is the function called with new (new binding)? If so, this is the newly constructed object.

var bar = new foo()

Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.

var bar = foo.call( obj2 )

Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.

var bar = obj1.foo()

Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.

var bar = foo()

That's it. That's all it takes to understand the rules of this binding for normal function calls. Well... almost.
## Call, apply and Bind  :
