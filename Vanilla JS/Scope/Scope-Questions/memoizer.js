/**
 * 
 * Write a function that takes memoizes another function 
 * 
 *  For example we have a function  f1 , which is a really computationally intensive / slow function 
 * and we want to memoize subsequent calls to that. so that when called when the same param the next time * it is not run again.
 * 
 *  Hint : Use closures and functions returning other functions
 */


 function slowFunc(n) {
   let x = 2 ;
   let y = 3 ;
   let z = 0 ;
    console.log('called');
   for(let i = 0; i < n ; i++ ) {
     for(let j = 0 ; j <n ; j ++) {
       z = x*y;
     }
   }
   return z+n;
 }

 function memoizer(fn) {
   let cache = new Map();
   return function(n){
     if(!cache.has(n)) {
        cache.set(n,fn(n));
     }
     return cache.get(n);
   }
 }


 let fastFunc = memoizer(slowFunc);
 console.time('slow fun');
 slowFunc(10000);
 console.timeEnd('slow fun');
 console.time('slow fun 2nd run');
 slowFunc(10000);
 console.timeEnd('slow fun 2nd run');

 console.time('fast fun');
 fastFunc(10000);

 console.timeEnd('fast fun');
 console.time('fast fun 2nd run');
 fastFunc(10000);
 console.timeEnd('fast fun 2nd run');


