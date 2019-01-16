// Deep clone the following object


const obj = {
  a: {
      b: {
          c:1
      }
  }
};

const clone = JSON.parse(JSON.stringify(obj));
clone.a.b.c = 3;
console.log(obj.a.b.c);


Object.prototype.deepClone  = function () {
  
}