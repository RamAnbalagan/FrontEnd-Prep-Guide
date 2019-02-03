class http2 {
  //Make HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //Make http post request
  async post(url,data){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    const resData = await response.json();

    return resData;
  }

  // Make a http PUT request
  async put(url,data){
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    const resData = await response.json();
    return resData;
  }

  // Make a http Delete request
  async delete(url){
    return new Promise( (resolve,reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => resolve('Resource deleted..'))
      .catch(err => reject(err));
    });
  }
  
}