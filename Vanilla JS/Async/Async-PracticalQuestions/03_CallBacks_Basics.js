
/**
 *  Pretend you have a blog and posts is the response from the server.
 *  
 * write a two functions called 
 * 1) createPost
 * 2) Get Posts
 * 
 *  UseCallbacks and SetTimeout to simulate Async!
 */

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

function createPost(post, callback) {
  setTimeout( () => {
    posts.push(post);
    callback();
  },2000);
}

createPost( {title: 'Post three', body: 'This is post three'} , getPosts);