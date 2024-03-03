// A promise is an object
//typeof new Promise((resolve, reject) => {}) === 'object'

// Promise states
// - Pending
// - Resolved
// - Reject

// 1. Execution function needs to be executed immediately.
// 2. resolution handler is called when resolved
class myPromise {
  constructor(executor) {
    this.promiseChain = [];
    this.handleError = () => {};
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    executor(this.onResolve,this.onReject);
  }
  
  then(onResolve) {
    this.promiseChain.push(onResolve);
    return this;
  }
  
  catch (handleError) {
    this.handleError = handleError;
    return this;
  }

  // When your asynchronous function calls resolve(apiResponse), the promise object then begins executing onResolve(apiResponse). It iterates through the entire promiseChain by removing the function at the front and executes it with the most recent value saved in storedValue. It then updates temp to the result of the most recent execution. It will execute these functions in order. This creates the synchronous promise chain. 
  onResolve(value) {
    let temp = value;
    try{
      this.promiseChain.forEach( (nextFunc) => {
      temp = nextFunc(temp);
      });
    }
    catch(error){
      this.promiseChain = [];
      this.onReject(error);
    }
  }

  //This loop is wrapped in a try/catch block.
  //This is special JavaScript syntax that looks for errors
  // If your asynchronous function calls reject(error) or your try/catch recognizes an error, it will then be passed to the onReject() method which calls the function that you passed to .catch().
  onReject(error) {
    this.handleError(error);
  }
}

fakeApiBackend = () => {
  const user = {
    username: 'treyhuffine',
    favoriteNumber: 42,
    profile: 'https://gitconnected.com/treyhuffine'
  };

  // Introduce a randomizer to simulate the
  // the probability of encountering an error
  if (Math.random() > .05) {
    return { 
      data: user, 
      statusCode: 200,
    };
  } else {
    const error = {
      statusCode: 404,
      message: 'Could not find user',
      error: 'Not Found',
    };
    
    return error;
  }
};

// Assume this is your AJAX library. Almost all newer
// ones return a Promise Object
const makeApiCall = () => {
  return new PromiseSimple((resolve, reject) => {
    // Use a timeout to simulate the network delay waiting for the response.
    // This is THE reason you use a promise. It waits for the API to respond
    // and after received, it executes code in the `then()` blocks in order.
    // If it executed is immediately, there would be no data.
    setTimeout(() => {
      const apiResponse = fakeApiBackend();

      if (apiResponse.statusCode >= 400) {
        reject(apiResponse);
      } else {
        resolve(apiResponse.data);
      }
    }, 5000);
  });
};

makeApiCall()
  .then((user) => {
    console.log('In the first .then()');
  
    return user;
  })
  .then((user) => {
    console.log(`User ${user.username}'s favorite number is ${user.favoriteNumber}`);
  
    return user;
  })
  .then((user) => {
    console.log('The previous .then() told you the favoriteNumber')
  
    return user.profile;
  })
  .then((profile) => {
    console.log(`The profile URL is ${profile}`);
  })
  .then(() => {
    console.log('This is the last then()');
  })
  .catch((error) => {
    console.log(error.message);
  });

