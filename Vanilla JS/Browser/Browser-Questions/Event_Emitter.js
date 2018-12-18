  // Write an Eventemitter class 
  //  emitter = new Emitter () 
  //* addListener ( event, callback)
  //* emit (event, ...args)
  //* removeListener (event,callback)

  class EventEmitter {
    constructor() {
      this.events = new Map();
    }
    addListener(event, callback) {
      this.events.has(event) || this.events.set(event, []);
      this.events.get(event).push(callback);
      console.log(this.events);
    }
    emit(event, ...rest) {
      let callbacks = this.events.get(event);
      if(callbacks && callbacks.length){
        callbacks.forEach(callback => {
          callback(...rest);
        });
        return true;
      }
      return false;
    }
    removeListener(event, toRemoveCallback) {
      let callbacks = this.events.get(event);
      let index;
      console.dir(callbacks[1]);
      if(callbacks && callbacks.length>0){
        index = callbacks.reduce( (i,callback,index) => {
          return (typeof(callback) === 'function' && callback === toRemoveCallback)?
            i = index:i;
        },-1);
        console.log('index is ' + index);
      }
      if( index > -1) {
        callbacks.splice(index,1)
        this.events.set(event,callbacks);
        return true;
      }
    }
  }

  /**
   * We use ES6's spread/rest operator here to collect all our arguments for emit into the single variable args; as well as to pass them as individual arguments to each listener callback invocation. Every time we emit on a label, all the other data we pass in gets passed to all our listeners callbacks.

  Handling the arguments for each of those actions above in ES5 would be  analogous to the following:

  function emit(label) {  
    var args = [].slice.call(arguments, 1);
    // ...
    listeners.apply(null, args);
  }
  The spread/rest operator helps make for cleaner and clearer code in this case.
   */
  /**
   *  {
   *    event1: [cb1 , cb2 ]
   *    event2: [cb3, cb1];
   *  }
   * 
   * 
   *
   *  */

   let eventEmitter = new EventEmitter();
   eventEmitter.addListener('change', (data) => {
     console.log('notified the change of' + data);
   });
   eventEmitter.addListener('change', (data) => {
    console.log('Changed' + data);
  });
    eventEmitter.addListener('change', (data) => {
    console.log('MaybeChaged' + data);
  });

  eventEmitter.emit('change', 'salary', 'spirituality' , 'lane8 dinner');
  
