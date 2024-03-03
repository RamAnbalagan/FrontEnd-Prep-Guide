/**
 * Write a function to flatten a multi-dimensional array into a single-level array.
 *  Provide both recursive and iterative solutions.
 */

function arrayFlattenRecursively(input) {
  let result = [];
  if(Array.isArray(input)) {
      input.forEach( arr => {
        arrayFlattenRecursively(arr);
      })
  } else {
    result.push(...input);
  }
  return result;
}


function arrayFlattenIteratively(input) {
	let stack = [...input] // [1,2,3] [4,5,6] 6,7,8
  let flattened = [];
  while(stack.length > 0 ) {
  	let curr = stack.shift();
    if(Array.isArray(curr)) {
    	stack.push(...curr);
    }
    else {
    	flattened.push(curr);
    }
  }
  return flattened;
}

console.log(arrayFlattenIteratively([[1,2,3],[4,5,6], [6,7,8]]));