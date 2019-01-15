Array.prototype.flatten = function () {
  let result = [];
  let stack = [];
  stack.push(...this);
  while(stack.length > 0 ) {
    let element = stack.pop();
    if(typeof(element) === 'object' && (element instanceof Array)){
        stack.push(...element);
    }
    else {
      result.push(element);
    }
  }
  return result.reverse();
}

Array.prototype.flattenRecursive = function () {
  if(!this.length>0) {
    return [];
  }
  let result = [];
  function flattenHelper(arr = []) {
    for(let element of arr) {
      if(typeof(element) === 'object' && (element instanceof Array)) {
        flattenHelper(element);
      }
      else {
        result.push(element);
      }
    }

  }
  flattenHelper(this);
  return result;
}

Array.prototype.myMap = function (callBack) {
  let result = [];
  for(let element of this) {
    result.push(callBack(element));
  }
  return result;
}

Array.prototype.myFilter = function (callBack) {
  let result = [];
  for(let element of this) {
    if(callBack(element)) {
      result.push(element);
    }
  }
  return result;
}

Array.prototype.myReduce = function (callBack,initialValue) {  
  let acc = initialValue;
  let count = 1;
  if(initialValue === undefined) {
    acc = this[0];
    count = 0;
  }
  while(count<this.length){
    acc = callBack(acc,this[count]);
    count++;
  }
  return acc;
}

Array.prototype.print = function() {
  let result = '';
  for(let i = 0 ;i<this.length; i++) {
    if(i!== this.length-1){
      result += this[i];
      result += ',';
    }
    else{
      result+=this[i];
    }
  }
  console.log(result);
}


// Execution
let array = [[1, 2],[3, 4, 5], [6,[7, [8, [9]]]]];  // => [1,2,3,4,5,6,7,8,9]

let a = [1,2,3,4,8,9];
let b = [0, 1, 2, 3, 4];
console.log('Implement Array.flat()');
console.log(array.flatten());
console.log(array.flattenRecursive());
console.log('Implement Array.map()');
console.log(a.myMap(x => x*x));
console.log('Implment Array.filter()');
console.log(a.myFilter(function(number){
  return number >= 4;
}));
console.log('Implement Array.reduce()');
console.log(b.myReduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
},5));

console.log('Implement array print');
// [1,2].print(); //1,2
[1,2,3].print();