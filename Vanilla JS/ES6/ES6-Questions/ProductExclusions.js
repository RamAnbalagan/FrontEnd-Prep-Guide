// could be potentially more than 3 keys in the object above
items = [
  {color: 'red', type: 'tv', age: 18, loc: 18},
  {color: 'silver', type: 'phone', age: 20, loc: 18},
  {color: 'brown', type: 'computer', age: 22, loc: 18},
  {color: 'purple', type: 'rhino', age: 32, loc: 18},
  {color: 'pink', type: 'tv', age: 2, loc: 18},
  {color: 'red', type: 'tv', age: 18, loc: 18},
  {color: 'silver', type: 'phone', age: 20, loc: 18},
  {color: 'brown', type: 'computer', age: 22, loc: 18},
  {color: 'green', type: 'phone', age: 31, loc: 18},
  {color: 'pink', type: 'tv', age: 2, loc: 18},
  {color: 'red', type: 'tv', age: 18, loc: 18},
  {color: 'silver', type: 'phone', age: 20, loc: 18},
  {color: 'brown', type: 'computer', age: 22, loc: 18},
  {color: 'blue', type: 'phone', age: 32, loc: 18},
  {color: 'pink', type: 'tv', age: 2, loc: 18}
  ]
  
excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
  {k: 'age', v: 12},
  {k: 'age', v: 13},
  {k: 'color', v: 'brown'}
  ];

function excludeItems(items, excludes) {
    excludes.forEach(pair => { items = items.filter(item => item[pair.k] === item[pair.v]);
    });
    return items;
}
  
  /*1. Describe what this function is doing...
    It is trying to remove the values in excludes from items.
    2. What is wrong with that function ?
    It is removin all of the items but the values in excludes.
    3. How would you optimize it ?
  */
// console.log(excludeItems3(items,excludes));
//----------------ANSWERS--------------------

//1. It is trying to return all the items that were not excluded as per the exclusions list.
// 2. The check in the filter method is incorrect, it is trying to check item[type] === item[value], item value will not be present at all, so it will always return empty.

//3 .
// o ( mn)  , m = number of items, n = number of excludes
function excludeItems2(items, excludes) {
  return excludes.reduce((arr, pair) => arr.filter(item => item[pair.k] !== pair.v), items);
}
  // o( mk + n)
function excludeItems3( items, excludes) {
  let hash = {};
  // o (n)
  for (let exclude of excludes) {
    let { k, v } = exclude;
    if (hash[k]) {
      hash[k][v] = 1;
    } else {
      hash[k] = { [v]: 1 };
    }
  }
  //O(m)
  return items.filter( item => {
    //o(k)
    for(let key in item){
      if(hash[key]){
          if(hash[key][item[key]]){
            return false;
          }
      }
    }
    return true;
  });
}


console.log(excludeItems3(items,excludes));