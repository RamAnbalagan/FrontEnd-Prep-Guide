#Basics
---
## Basics
   * [ ] Primitives, Non-Primitives
   * [ ] Type of, instance of
   * [ ] Strict Mode
   * [ ] Error Handling
   * [ ] **new** keyword
   * [ ] Arrays, Strings and Numbers
   * [ ] Pass by value vs Reference
   * [ ] Native constructors
   * [ ] Coercion

## Primitives, Non - Primitives

n JavaScript, variables don't have types -- values have types. Variables can hold any value, at any time.

Another way to think about JS types is that JS doesn't have "type enforcement," in that the engine doesn't insist that a variable always holds values of the same initial type that it starts out with. A variable can, in one assignment statement, hold a `string`, and in the next hold a `number`, and so on.

**Primitives** 
  * `undefined` 
  * `null`
  * `Boolean`
  * `symbol`
  * `Number`
  * `String`


> Undefined means doesn't currently have an value, undeclared means no variable was even assigned to hold a value.

> A Symbol is a unique and immutable primitive value and may be used as the key of an Object property .

**Non-Primitives**

## Type of , Instance of 

The `typeof` operator inspects the type of the given value, and always returns one of seven string values -- surprisingly, there's not an exact 1-to-1 match with the seven built-in types we just listed.

```javascript
typeof undefined     === "undefined"; // true
typeof true          === "boolean";   // true
typeof 42            === "number";    // true
typeof "42"          === "string";    // true
typeof { life: 42 }  === "object";    // true

// added in ES6!
typeof Symbol()      === "symbol";    // true
```

>**Null is special in the sense that it is buggy when combined with the typeof operator, it shows up as object instead of 'null'**

```javascript
typeof null === "object"; // true
```

Although functions are special kind of objects , `typeof function() {} === 'function`. 

>**Functions are callable objects, they have a special internal `[[call]]` property that lets them be invoked**

Arrays are also special objects, they are 'subtype' of object.

### typeof Undeclared
The typeof operator returns "undefined" even for "undeclared" (or "not defined") variables. Notice that there was no error thrown when we executed typeof b, even though b is an undeclared variable. This is a special safety guard in the behavior of typeof.

## Command Line input

A feature of the `process object` is standard input and standard output. These two objects offer us a way to communicate with a process while it is running.

> You have to explicity mention new lines . Else it won't move the next write to the new line.

`stdin.on('data', callbackfunction)` gets triggerred anytime user inputs anything. The data is passed to the call back function!

```javascript
var questions = ['what is your name' , 'what is ur name fav hobby' , 'what is ur preferred languge'];

var answers = [ ];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write("  > ");
}

process.stdin.on('data' , data => {
  answers.push(data.toString().trim());
  if(answers.length < questions.length){
    ask(answers.length);
  }
  else{
    console.log(answers);
    process.exit();
  }
});

ask(0);

```
## Arrays
As compared to other type-enforced languages, JavaScript arrays are just containers for any type of value, from `string` to `number` to `object` to even another `array` (which is how you get multidimensional arrays).

**Quirks of Arrays**
* arrays are numerically indexed (as you'd expect), but the tricky thing is that they also are objects that can have string keys/properties added to them (but which don't count toward the length of the array):

* You can use slice(..) and Array.from(..) methods to convery array liek values to a true array.

 * Using delete on an array value will remove that slot from the array, but even if you remove the final element, it does not update the length property, so be careful! 

 ## Strings

Strings are not just an array of characters. The similarity is mostly just skin-deep.

> In JS strings are immutable, while arrays are quite mutable. This means, none of the string methods can alter it's contents in place , but must create and return new strings/

Also, many of the array methods that could be helpful when dealing with strings are not actually available for them, but we can "borrow" non-mutation array methods against our string.

```javascript
  a.join;			// undefined
  a.map;			// undefined

  var c = Array.prototype.join.call( a, "-" );
  var d = Array.prototype.map.call( a, function(v){
    return v.toUpperCase() + ".";
  } ).join( "" );

  c;				// "f-o-o"
  d;				// "F.O.O."
```
## Numbers

JavaScript has just one numeric type: number. This type includes both "integer" values and fractional decimal numbers. I say "integer" in quotes because it's long been a criticism of JS that there are not true integers, as there are in other languages. That may change at some point in the future, but for now, we just have numbers for everything.

So, in JS, an "integer" is just a value that has no fractional decimal value. That is, `42.0` is as much an "integer" as 42.

Small Decimal Values
The most (in)famous side effect of using binary floating-point numbers (which, remember, is true of all languages that use IEEE 754 -- not just JavaScript as many assume/pretend) is:

```javascript
0.1 + 0.2 === 0.3; // false
```
Mathematically, we know that statement should be true. Why is it false?

Simply put, the representations for 0.1 and 0.2 in binary floating-point are not exact, so when they are added, the result is not exactly 0.3. It's really close: 0.30000000000000004, but if your comparison fails, "close" is irrelevant.

We can use Number.EPSILON to compare two numbers within the rounding error tolerance.

**Safe Integer Ranges**
Because of how numbers are represented, there is a range of "safe" values for the whole number "integers", and it's significantly less than Number.MAX_VALUE.

`Number.MAX_SAFE_INTEGER` : 2^53 - 1 
`Number.MIN_SAFE_INTEGER` : -(2^53 -1)

**Testing for Integer**
To test if a value is an integer, you can use the ES6-specified Number.isInteger(..):

```javascript
Number.isInteger( 42 );		// true
Number.isInteger( 42.000 );	// true
Number.isInteger( 42.3 );	// false
```

## NaN : Not A Number

Any mathematic operation you perform without both operands being numbers (or values that can be interpreted as regular numbers in base 10 or base 16) will result in the operation failing to produce a valid number, in which case you will get the `NaN` value.

It is better to think of NAN as 'invalid' number instead of 'Not a number'. Since if you try to `typeof Nan` you get 'number'.

NaN is a very special value in that it's never equal to another NaN value (i.e., it's never equal to itself). It's the only value, in fact, that is not reflexive (without the Identity characteristic x === x). So, NaN !== NaN. A bit strange, huh?

**Testing for NaN**
NaN is the only value in the whole language where that's true; every other value is always equal to itself. We take advantage of this and there is a method for this called `Number.isNan()` that we can use.


## Infinity 

`1/0` in JS results in Infinity.
`-1/0` in JS results in -Infinity.


## Pass by reference vs Pass by value

Simple values (aka scalar primitives) are always assigned/passed by value-copy: null, undefined, string, number, boolean, and ES6's symbol.

Compound values -- objects (including arrays, and all boxed object wrappers ) and functions -- always create a copy of the reference on assignment or passing.

>**References are not like references/pointers in other languages -- they're never pointed at other variables/references, only at the underlying values.**

```javascript
  var a = 2;
  var b = a; // `b` is always a copy of the value in `a`
  b++;
  a; // 2
  b; // 3

  var c = [1,2,3];
  var d = c; // `d` is a reference to the shared `[1,2,3]` value
  d.push( 4 );
  c; // [1,2,3,4]
  d; // [1,2,3,4]
```

But both c and d are separate references to the same shared value [1,2,3], which is a compound value. It's important to note that neither c nor d more "owns" the [1,2,3] value -- both are just equal peer references to the value. So, when using either reference to modify (.push(4)) the actual shared array value itself, it's affecting just the one shared value, and both references will reference the newly modified value [1,2,3,4].

## Native Constructors

We have built in natives which can be used as a native constructor. 
> The result of constructor form of value creation `new String('abc)` is an object wrapper around the primitive value. So if you do `typeof` for any of these variables, you would see "Object" as the result.

The Array constructor has a special form where if only one number argument is passed, instead of providing that value as contents of the array, it's taken as a length to "presize the array" (well, sorta).

Commonly used Natives are 
```javascript
let s = new String('Hello world);
let n = new Number(1);
let t = new Boolean(true);
let a = new Array([1,2]);
let obj = new Object({});
let exp = new RegExp()
let date = new Date()
let err = new Error()
let sym = new Symbol() -- added in ES6!
```
> All these are not primitives but rather objects, which contain a wrapper around primitives.

The main reason you'd want to create an error object is that it captures the current execution stack context into the object (in most JS engines, revealed as a read-only .stack property once constructed). This stack context includes the function call-stack and the line-number where the error object was created, which makes debugging that error much easier.

**Unboxing Object wrapper**
If you have an object wrapper and you want to get the underlying primitive value out, you can use the valueOf() method:

```javascript
  var a = new String( "abc" );
  var b = new Number( 42 );
  var c = new Boolean( true );

  a.valueOf(); // "abc"
  b.valueOf(); // 42
  c.valueOf(); // true
```

## Coercion

Converting a value from one type to another is often called "type casting," when done explicitly, and "coercion" when done implicitly (forced by the rules of how a value is used).

There are two types of Coercion 
1: Implicit Coercion
2: Explicit Coercion

```javascript
  var a = 42;

  var b = a + "";			// implicit coercion

  var c = String( a );	// explicit coercion
```

The difference should be obvious: "explicit coercion" is when it is obvious from looking at the code that a type conversion is intentionally occurring, whereas "implicit coercion" is when the type conversion will occur as a less obvious side effect of some other intentional operation.

**Explicitly: Strings <--> Numbers**
```javascript
var a = 42;
var b = String( a );

var c = "3.14";
var d = Number( c );

b; // "42"
d; // 3.14
```

**Explicitly: Date --> Number**
```javascript
var d = new Date( "Mon, 18 Aug 2014 08:53:06 CDT" );

+d; // 1408369986000


var timestamp = +new Date();
```

**Implicitly: Strings <--> Numbers**

```javascript
  var a = "42";
  var b = "0";

  var c = 42;
  var d = 0;

  a + b; // "420"
  c + d; // 42
```
<hr>
## Error Handling
```javascript
  try{
    // Produce a reference error
    myFunction();
  }
  catch(e) {
    console.log(e.message);
  }
  finally {
    console.log('Finally runs regardless of results');
  }
  console.log('Program continues');
```

Types of errors :
- TypeError : `myfunction()`
- ReferenceError : `null.myFunction()`
- Syntax error : `eval('hey')`
- URI error : `decodeURIComponent('%')`
  
`e.name` contains the name of the error : **ReferenceError**
`e.message`contains the message : "myFunction is not defined"

>The main benefit of error handling is that , your program continues to execute inspite of an error and does not crash.

**We can create our own error too!**
  - Using the throw keyword.
  - `throw new SyntaxError('User has no name');