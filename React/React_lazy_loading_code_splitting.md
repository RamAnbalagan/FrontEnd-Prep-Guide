# Lazy loading

* Lazy loading is loading something asynchrously, so that the page is rendering while other pieces are loading.
* Need React 16.6 +
  
  ```
  import React, {Component,lazy, suspense} from 'react';

  const MyComp = lazy( () => import('./.../myComp'));

    render() {
      return(
        <div >
          <Suspense fallback = {<div> Loading .... </div>}>
            <MyComp> </MyComp>
          </Suspense>
        </div>
      )
    }
  ```
