# Objects
----
### Objects as a Datastructure
  #### 1. HashMap
  #### 2. Iteration
   
  #### 3. JSON operation

  #### 4. Copying Objects
  Sometimes Copying objects is necessary so that we can hold to some state and later refer it.
  ```javascript
  let Obj = {a:5} 
  let copy = Obj  // a:5
  ```
   This assignment does not copy the object, rather just saves it's reference. So any changes we make to Obj will get reflected to copy as well, which is not desirable.

   ```javascript
   Obj.a = 2 ;
   console.log(copy.a) // 2
   ```

   **Shallow copy**

   We can use Object.assign to shallow copy an object like so, however it has a caveat : i.e the inner nested objects are still references to the original and this could cause problems when we have objects inside objects.
  
   1: Using
   ```javascript
   let obj = {out:1, nested:{in:1}} ;
   let copy = Object.assign({},obj );
   obj.out = 2;
   obj.nested.in = 2;
   console.log(copy.out) // 1
   console.log(copy.nested.in) // 2 
   ```

   ***Deep Copy***
   Deep copy is when an object is fully reference free and when even inner objects are not holding any references to the original.

   It can be done two days 

   1 : Using JSON Methods :
   ```javascript
   let copy = JSON.parse(JSON.stringify(obj));
   ```
   We basically convert the JS object into a JSON string and then parse it back into a JS object. The caveat in this case is that the obj to be copied must be JSON valid.

   >Also things like dates and ISO strings might not work, since converting it to JSON might change the format.

   2 : Writing a custom method :

   A more eloborate foolproof way would be just writing your custom method to do so.
  ```javascript
   function deepCopy( obj = {} ) {
    let copy = {} ;
    for(let property in obj) { 
      if(obj[property]!==null && typeof(obj[property])=== 'object'){
      copy[property]= deepCopy(obj[property]);	
        }
      else{
      copy[property] = obj[property];		
        }
    }
    return copy;
    }
    
    let obj = {a:1, b:{c:1}};
    let copy = deepCopy(obj);
    obj.a = 2;
    obj.b.c = 2;
    console.log(copy); // {a:1, b:{c:1}}
  ```
  #### 5. Comparing Objects
  Because the == sign only compares identity, sometimes a deep comparision is needed to ensure two objects are equal.
  The following deepEqual method could be used to compare other data types as well.
  ##### note: because null is also an object type, checking (typeof x == "object" && x != null) is neccessary to ensure deepEqual is dealing with an object before looping through the objects props.
  
  ```javascript
  var deepEqual = function (x, y) {
    if (x === y) {
      return true;
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
      if (Object.keys(x).length != Object.keys(y).length)
        return false;

      for (var prop in x) {
        if (y.hasOwnProperty(prop))
        {  
          if (! deepEqual(x[prop], y[prop]))
            return false;
        }
        else
          return false;
      }

      return true;
    }
    else 
      return false;
  }
  ```  
  [stackoverflow](https://stackoverflow.com/questions/25456013/javascript-deepequal-comparison)
  
### Protypical Inheritance
### Constructors vs OLOO
