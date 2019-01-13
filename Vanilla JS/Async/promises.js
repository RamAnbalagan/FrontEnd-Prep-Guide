
// Promises
// You generally don't have to return a promise, since you will mostly be dealing with promises that already exist!

const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post two'}
];

// going to mimic server interaction using some mockData and setTimeout
function getPosts() {
  setTimeout( () => {
    let output = '';
    posts.forEach( (post,index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}

// here we create a new promise!
function createPost(post) {
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      posts.push(post);
      const error = true;
      if(!error){
        resolve();
      }
      else {
        reject('Error something went wrong');
      }
    },2000);
  });
}

// createPost({title: 'Post three', body: 'This is post three'})
//   .then(getPosts)
//   .catch(error => console.log(error));


  // Promise.all

  const promise1 = Promise.resolve('Hello World');
  const promise2 = 10;
  const promise3 = new Promise((resolve,reject) => 
    setTimeout(resolve, 2000,'Goodbye'));
  const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());

    Promise.all([promise1,promise2,promise3,promise4]).then ( (values) => {
       console.log(values);
    });





