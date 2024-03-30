/**
 * mplement a function that can flatten a given array with nested sub-arrays.
 *  The function should accept two parameters: the first parameter is the array to be flattened,
 *  and the second parameter is the depth of the nested sub-arrays to be flattened.
 * 
 *  Implement the same function both recursively and iteratively.
 */


// TESTS
console.log(flatRecursively([1,[2],[3,[4]]], 0), '1') // [1, [2], [3, [4]]]
console.log(flatRecursively([1,[2],[3,[4]]], 1), '2') // [1, 2, 3, [4]]
console.log(flatRecursively([1,[2],[3,[4]]], 2), '3') // [1, 2, 3, 4] 
console.log(flatItertively([1,[2],[3,[4]]], 0), '4') // [1, 2, 3, [4]]
console.log(flatItertively([1,[2],[3,[4]]], 1), '5') // [1, 2, 3, [4]]
console.log(flatItertively([1,[2],[3,[4]]], 2), '6') // [1, [2], [3, [4]]]