// 1 . For the given object obj, how would you modify it to print A and B in the console?

/** 
  const obj1 = {
    a: 1,
    b: 2,
    getA() {
      console.log(this.a);
    },
    getB() {
      console.log(this.b);
    }
  }
  console.log(obj1.getA().getB()); 

*/

console.log('----------------1----------------');
const obj1 = {
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
obj1.getA().getB(); 

// 2 . For the given block of code , what is the output and why ? 

/** 
  const obj2 = {
    x:1,
    getX() {
      const inner = function() {
        console.log(this.x);
      }
      inner();
    }
  };
  console.log(obj.getX()); 

*/

console.log('----------------2----------------');

// Answer : Undefined


// Follow up question : How would you fix it , give me 3 ways of fixing it.

const obj2 = {
  x:1,
  getX() {
    /*3 . do something like this 
          const that = this;
          inner = function () {
            console.log(that.x);
          }
    */
    // 2 . change this to arrowfunc
    const inner = function() { 
      console.log(this.x);
    }
    inner();
    // 1 . change this to inner.call(this)
  }
};
console.log(obj2.getX()); 