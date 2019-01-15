// 1 . For the given object obj, how would you modify it to print A and B in the console?

/** 
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

*/

console.log('----------------1----------------');
const obj2 = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
    console.log(this.b);
  }
}
obj2.getA().getB(); 