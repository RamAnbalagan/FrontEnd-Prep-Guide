# ES6
<hr>

## MAPS

* Maps are key-value pairs.
* We can use ANY type as a key or value.

**Create a map**
const map1 = new Map();

**Set keys**
```javascript
const key1 = 'some string',
      key2 = {},
      key3 = function() {} ;
```
**Set map values by key**
```javascript
map1.set(key1, 'Value of key1);
map1.set(key2,'Value of key2);
map1.set(key3,'Value of key3);
```
**Get Values by key**
`map1.get(key1)`

**Other map methods**
```javascript
// Returns size. Similar to length
map1.size
// Returns an interator of keys
map1.keys() 
// Returns an iterator of values
map1.values()
```
**Iterating through maps**
```javascript
for( let [key,value] of map1) {
  console.log(key);
  console.log(value);
}

map1.forEach( (value,key) => {
  console.log(key);
  console.log(value);
})
```

**Convert Sets to Arrays**
1 .`const keyValArr = Array.from(map1)`
2 .`const valArr = Array.from(map1.values())`
3. `const keyArr = Array.from(map1.keys())`

<hr>

## SETS

* Sets store unique values of any type.

**Creating a set**
`const set1 = new Set()`
**Adding values to a set**
```javascript
  set1.add(100);
  set1.add('A String');
  set1.add( {hey: 'there'});
  set.add(true);
  set.add(100);
```
**Checking a set**
1. `set1.has(100)`
2. `set1.has(50+50)`

**Deleting from a set**
`set1.delete(100)`

**Iterating through set**
```javascript
  for( let item of set1) {
    console.log(item);
  }

  set1.forEach( item => {
    console.log(itesm);
  });
```
<hr>
## Destructuring

 * Assignment   : `let [a,b] = [100,200]`
 * Swap         : `[a,b] = [b,a]`
 * Rest pattern : `[a,b, ...rest] = [100,200,300,400,500]`
 
 **Objects**
 * Assignment : `{a,b} = {a:100, b : 200,c :300}`
 * Rest Pattern : `

 **Examples**
    ```javascript
    // Array destructuring
    const people = ['john','beth','mike'];
    const [person1,person2,person3] = people;

    // Objects destructuting
    const person = {
      name: 'John Doe',
      age : 29,
      city : 'Bangalore',
      gender: 'Male',
      sayHello : function () {
        console.log('hello');
      }
    }

    const { name, age , city , gender, sayHello } = person;
    ```
  <hr>

  ## ES 6 Modules

  An Example of pre-es6 modules technique ( common js)

  ```javascript

  // file mymodule.js
  module.exports = {
    name : 'Brad',
    email: 'test@test.com`
  }



  // In another file 
  const person = require('./mymodule1');
  console.log(person.name);
  ```

  An example of **Es 6 modules**
  ```javascript
  // file mymodule2
  export const person = {
    name: 'John',
    email : 'john@ron.com`
  }

  export function sayHello
  // In another file 
  import { person } from './mymodule2'
  console.log(person.name);
  ````


