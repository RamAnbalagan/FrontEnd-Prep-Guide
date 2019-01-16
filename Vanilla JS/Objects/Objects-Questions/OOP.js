// Question 1 
console.log('------------1-------------');

/**
  Given the code below, make the getters getX and getY work, so that they display the value , through inheritances. 

  You've got to pass the values  of x and y to b,
  and fetch the values of X and Y from B as well using getX and getY 

      const a = function(x) {
        this.x = x;
      };
      const b = function(x,y){
        this.y = y;
      };

      const newB = new b('x','y');

      newB.getX();
      newB.getY();
*/
const a = function(x) {
  this.x = x;
};
const b = function(x,y){
  a.call(this,x);
  this.y = y;
};

b.prototype.getX = function () {
  return this.x;
}
b.prototype.getY = function () {
  return this.y;
}
const newB = new b('x','y');

console.log(newB.getX());
console.log(newB.getY());


// Question 2 
console.log('------------2-------------');




// Question 3 
console.log('------------3-------------');


// Question 4 
console.log('------------4-------------');