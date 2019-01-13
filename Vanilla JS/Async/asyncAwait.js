const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post two'}
];
function getPosts() {
  setTimeout( () => {
    let output = '';
    posts.forEach( (post,index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  },1000);
}

function createPost(post) {
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      posts.push(post);
      const error = false;
      if(!error){
        resolve();
      }
      else {
        reject('Error something went wrong');
      }
    },2000);
  });
}


// Async / Await

async function init() {
  await createPost({title: 'Post three', body : 'This is post three'});
  getPosts();
}

init();


// Async / Await with fetch 
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  console.log(data);
}

fetchUsers();
