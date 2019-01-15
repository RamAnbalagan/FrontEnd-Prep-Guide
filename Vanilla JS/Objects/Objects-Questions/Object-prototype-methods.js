// 1 .
// Given this object X convert it into an array , such that the array has only the values of X

let x = {
  a: 1,
  b:2
};

const xArr = Object.keys(x).map(key => x[key]);

console.log(xArr);

console.log('---------------2------------');
// 2 .
// For the given object obj, how would you modify it to print A and B in the console?
const obj2 = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
  },
  getB() {
    console.log(this.b);
  }
}
console.log(obj2.getA().getB()); 
// 3

// 4 