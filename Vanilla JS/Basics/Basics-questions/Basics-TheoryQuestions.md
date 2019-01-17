# Basics : Theory Questions

### 1. How would you test for a null value using its type ?

```javascript
var a = null;

(!a && typeof a === "object"); // true
```

### 2 . What are the seven values that typeof can return ?

```
string
number
boolean
symbol
undefined
object
function // 7th type
```
### 3 . Why do you have to say Array.length and not Array.length () ?

```
Because Arrays are objects , which have a special property called length.
and the .length property is automatically updated.
```

### 4 . Can variables have types in JS ?

```
Nope, in JS variables don't have type, values have types.
```

### 5. What is the difference between "undefined" and "undeclared" ?

```
An "undefined" variable is one that has been declared in the accessible scope, but at the moment has no other value in it.
By contrast, an "undeclared" variable is one that has not been formally declared in the accessible scope.
```

### 6. what are the console.logs here and why ?

```javascript
  var a = [ ];

  a[0] = 1;
  a["foobar"] = 2;

  consoloe.log(a.length);		// 1
  console.log(a["foobar"]);	// 2
  console.log(a.foobar);		// 2

  a["13"] = 42;
  console.log(a.length) // 14 
```

### 7. What are similarities between Arrays and Strings ?

```javascript
  a.length;							// 3
  b.length;							// 3

  a.indexOf( "o" );					// 1
  b.indexOf( "o" );					// 1

  var c = a.concat( "bar" );			// "foobar"
  var d = b.concat( ["b","a","r"] );	// ["f","o","o","b","a","r"]

  a === c;							// false
  b === d;							// false

  a;									// "foo"
  b;									// ["f","o","o"]
```
### 8. What is the difference between Arrays and Strings ?
Strings are immutable, while arrays are mutable. So you can't perform inplace modifications on strings.

### 9 . What is the value of a [] at the end of this code ?

```javascript
  function foo(x) {
    x.push( 4 );
    x; 

    x = [4,5,6];
    x.push( 7 );
    x; 
  }

  var a = [1,2,3];

  foo( a );

  a; // ?
```

and this code ?
```javascript
  function foo(x) {
    x.push( 4 );
    x; 

    x.length = 0; 
	  x.push( 4, 5, 6, 7 );
	  x; 
  }

  var a = [1,2,3];

  foo( a );

  a; // ?
```

### 9 . What is the value of a [] at the end of this code ?

```javascript

  function foo(x) {
    x = x + 1;
    x; // 3
  }

  var a = 2;
  var b = new Number( a ); // or equivalently `Object(a)`

  foo( b );
  console.log( b ); // ?
```
### 10 . What is the output here and why . Hint : Object wrapper gotchas!

```javascript
  var a = new Boolean( false );

  if (!a) {
    console.log('I ran');
  }
  else{
    console.log('I didnt run');
  }
```

