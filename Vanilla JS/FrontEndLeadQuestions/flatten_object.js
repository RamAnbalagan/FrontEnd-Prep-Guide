/** Write a function that takes an object as input and flattens it so that there are no nested objects.
 * 
 The function should return an object with all the key-value pairs of the input object,
 where any nested objects are flattened to a single level. If a key has a value of null or undefined,
  it should still be included in the output object. Below are some input and expected output examples


Input: { a: 1, b: { c: 2, d: 3, e: { f: null } }, g: 4, h: undefined } Output: { a: 1, c: 2, d: 3, f: null, g: 4, h: undefined } 

Input: { a: { b: { c: 1 }, d: { e: 2, f: 3 } } } Output: { c: 1, e: 2, f: 3 } 

Input: { a: { b: { c: { d: { e: 1 } } } } } Output: { e: 1 }
  **/

function flattenObject(obj) {
    if( typeof obj !== "object") {
        return {}
    }
    let result = {};
    for( let key in obj) {
        let val = obj[key];
        if( typeof val === "object" && val!==null) {
            const flattened = flattenObject(val);
            result = {
                ...result,
                ...flattened
            }
        } else {
            result[key] = val;
        }
    }
    return result;
}

console.log(flattenObject({ a: 1, b: { c: 2, d: 3, e: { f: null } }, g: 4, h: undefined }));