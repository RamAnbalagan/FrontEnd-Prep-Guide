#Basics
---
## Basics
   * [ ] Primitives, Non-Primitives
   * [ ] Type of, instance of
   * [ ] Strict Mode
   * [ ] Error Handling
   * [ ] **new** keyword
   * [ ] Pass by value vs Reference

## Primitives, Non - Primitives

**Primitives**
  * `undefined` 
  * `null`
  * `Boolean`
  * `symbol`
  * `Number`
  * `String`


> Undefined means doesn't currently have an value, undeclared means no variable was even assigned to hold a value.

> A Symbol is a unique and immutable primitive value and may be used as the key of an Object property .
> 

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