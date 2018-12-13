# Scope
------
## What is Scope ?

Scope is the set of rules that determines where and how a variable (identifier) can be looked-up. This look-up may be for the purposes of assigning to the variable, which is an LHS (left-hand-side) reference, or it may be for the purposes of retrieving its value,which is an RHS (right-hand-side) reference.

  #### Compiler Theory
  ALthough JS is an interpreted dynamic language, it is in fact a compiled language. 

  It is however not a traditionally compiled language, which undergoes 3 steps before executed.
  - Tokenizing ( breaking down var a = 2 into 'var' , 'a', '=' and '2')
  - Parsing ( taking a stream of tokens and turning it into a tree of nested elements called the Abstract Syntax tree)
  - Code-Generation ( takign the AST and turning it into executable code)
  
  > In JS the engine is vastly complex than those 3 steps. The compilation happens just microseconds before the code is executed, unlike other languages it doesn't have the luxury to compile ahead of time and optimize.

  #### The Scope conversation

  We have 3 characters who have a conversation to process the program ```var a = 2```

  The engine is the main driver of the program and has two friends called compiler and scope.

  1. **Engine** : Start to finish compilation , Execution
  2. **Compiler** : Parsing and Code-generation
  3. **Scope** : Collects and maintains a look-up list of all variables and enforces a strict rules as to how these are accessible to the currently executable code.

  ```
  Steps for var a = 2
  1. Compiler breaks down var a = 2 into tokens
  2. Compiler asks Scope if variable a already exists for that particular scope collection
  3. If yes, it ignores the declaration and moves on
  4. If no, it asks scope to declare a new variable for that scope collection.
  5. Compiler produces code for Engine to later execute.
  6. Engine runs the code and will ask Sceop if there is a variable called a in the current scope collection
  7. If yes, the Engine uses that variable and assigns the value 2 to it.
  8. If no, the engine looks elsewhere.
  ```

  ### LHS vs RHS Lookup

  LHS lookup : Done when a variable appears on the Left side of an operation, trying to find the variable container itself.

  RHS Lookup : Done when a variable appears on the right side of an operation, trying the find the value of the variable.

  ### Sample conversation
  ```
  function foo(a) {
	console.log( a ); // 2  
  }
  foo( 2 );
  ```

>Engine: Hey Scope, I have an RHS reference for foo. Ever heard of it?

>Scope: Why yes, I have. Compiler declared it just a second ago. He's a function. Here you go.

>Engine: Great, thanks! OK, I'm executing foo.

>Engine: Hey, Scope, I've got an LHS reference for a, ever heard of it?

>Scope: Why yes, I have. Compiler declared it as a formal parameter to foo just recently. Here you go.

>Engine: Helpful as always, Scope. Thanks again. Now, time to assign 2 to a.

>Engine: Hey, Scope, sorry to bother you again. I need an RHS look-up for console. Ever heard of it?

>Scope: No problem, Engine, this is what I do all day. Yes, I've got console. He's built-in. Here ya go.

>Engine: Perfect. Looking up log(..). OK, great, it's a function.

>Engine: Yo, Scope. Can you help me out with an RHS reference to a. I think I remember it, but just want to double-check.

>Scope: You're right, Engine. Same guy, hasn't changed. Here ya go.

>Engine: Cool. Passing the value of a, which is 2, into log(..).

#### Nested Scope Traversal

>Engine starts at the currently executing Scope, looks for the variable there, then if not found, keeps going up one level, and so on. If the outermost global scope is reached, the search stops, whether it finds the variable or not.

#### Scope Errors

If an RHS look-up fails to ever find a variable, anywhere in the nested Scopes, this results in a ReferenceError being thrown by the Engine. It's important to note that the error is of the type **ReferenceError**.

>ReferenceError is Scope resolution-failure related, whereas TypeError implies that Scope resolution was successful, but that there was an illegal/impossible action attempted against the result.


## Let vs Var , Hoisting

## IIFE
## Dynamic vs Lexical

Lexical Scope is used by most languges ( including JS ), dynamic is used by few languages only.


## **'this'** keyword
## Call, apply and Bind