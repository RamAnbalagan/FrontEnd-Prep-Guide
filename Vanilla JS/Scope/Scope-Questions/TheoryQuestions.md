# Scope Theory Questions
----
1. Check your understanding so far. Make sure to play the part of Engine and have a "conversation" with the Scope:

	```
	function foo(a) {
		var b = a;
		return a + b;
	}
	var c = foo( 2 );
	```
	Identify all the LHS look-ups (there are 3!).

	Identify all the RHS look-ups (there are 4!).

2. What is the output of this ? 

	```javascript
	var text = 'outside';
	function logIt(){
			console.log(text);
			var text = 'inside';
	};
	logIt();
	```

	**Answer :**
	Hoisting. In Javascript, variable declarations are "hoisted" to the top of the current scope. Variable assignments, however, are not.

	The declaration (but not the assignment) of text gets hoisted to the top of logIt(). So our code gets interpreted as though it were:

	```javascript
	var text = 'outside';
	function logIt(){
			var text;
			console.log(text);
			text = 'inside';
	};
	logIt(); //undefined
	```

3. what will the following code output?
	```javascript
	const arr = [10, 12, 15, 21];
	for (var i = 0; i < arr.length; i++) {
		setTimeout(function() {
			console.log('Index: ' + i + ', element: ' + arr[i]);
		}, 3000);
	}
	```
	**Answer :**
	>Index: 4, element: undefined(printed 4 times).

	This question tests your knowledge of some important JavaScript concepts, and because of how the JavaScript language works this is actually something that can come up quite often when you’re working — namely, needing to use setTimeout or some sort of async function within a loop.
	
	The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i. After 3 seconds go by, the function is executed and it prints out the value of i, which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the loop finally stops at 4.arr[4] does not exist, which is why you get undefined.

4. What is the output of this ?

	```javascript
	for (var i = 0; i < 3; i++) {
	 setTimeout(function() { alert(i); }, 1000 + i);
	}
	```

	**Answer :**

	The goal of the code above is to alert the numbers 0, 1, and 2 each after 1, 1.1, and 1.2 seconds, respectively. The problem though, is that if you run the above code in your console, you actually get the number 3 alerted 3 times after 1, 1.1, and 1.2 seconds. This is because of an issue with JavaScript closures.<br>
	A JavaScript closure is when an inner function has access to its outer enclosing function's variables and properties. <br>
	Here the inner function inside setTimeout uses a variable i which is declared outside of itself. The variable i is actually declared within the for loop and the inner function accesses it. So when the for loop is done running, each of the inner functions refers to the same variable i, which at the end of the loop is equal to 3. Our goal is for each inner function to maintain its reference to the variable i without the value of it being altered.<br>
**Solutions to this issue**
	1. IIFE
		 ```javascript
		for (var i = 0; i < 3; i++) {
			setTimeout(function(i_local) { 
				return function() { alert(i_local); } 
			}(i), 1000 + i);
		}
		```
	2. Use let to declare the variable `i`

5. What will this output and why ?
	```javascript
	var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
	};
	var stoleSecretIdentity = hero.getSecretIdentity;
	console.log(stoleSecretIdentity());
	console.log(hero.getSecretIdentity());
	```

	Answer :
	The code will output:

	```
	undefined
	John Doe
	```
	The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.<br>
	One way to fix the stoleSecretIdentity() function is as follows:

	```
	var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
	```
6. What is the output of this and why ?
			```javascript
				function foo() {
					console.log( this.a );
				}
				var a = 2;

				(function(){
					"use strict";

					foo(); // 2
				})();
			```