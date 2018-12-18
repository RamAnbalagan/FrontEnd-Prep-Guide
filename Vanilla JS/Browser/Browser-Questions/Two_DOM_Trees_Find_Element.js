//Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B.

/* Example 
        RootA                      RootB                         
        / | \                       / | \ 
       /  |  \                     /  |  \
     Foo  Bar Boo                Boo Bar  Foo
      |         |                 |         |
     Child1     |               Child3      |
              Child2                      Child4
               / \                          / \
             Ying Bing                    Yang Bong
        
    Input  : ( Root, RootB , Ying) 
    Output : Yang
    
  <body>
    <div id="RootA">
      <div id="Foo">
        <div id="Child1"></div>
      </div>
      <div id='Bar'></div>
      <div id ='Boo'>
        <div id='Child2'>
          <div id='Ying'></div>
          <div id='Bing'></div>
        </div>
      </div>
    </div>
      
    <div id="RootB">
      <div id="Boo">
        <div id="Child3"></div>
      </div>
      <div id='Bar'></div>
      <div id ='Foo'>
        <div id='Child4'>
          <div id='Yang'></div>
          <div id='Bong'></div>
        </div>
      </div>
    </div>
  </body>
*/
const getNodeFromPath = (root, path) => {
	//[1,0,2]
  let current = root;
  while(path.length > 0) {
  	let childIndex = path.pop();
  	let childArray = Array.from(current.children) ;
    current = childArray[childIndex];
  }
  return current;
}

const getPath = (root, node) => {
  let path = [];
  while(node!== root) {
  	let parent = node.parentElement;
    let children = Array.from(parent.children);
    let nodeIndex = children.indexOf(node);
    path.push(nodeIndex);
    node = parent;
  }
  console.log(path);
  return path
}

let rootA = document.querySelector('#RootA');
let rootB = document.querySelector('#RootB');
let nodeA = document.querySelector('#Bing');

console.log(getNodeFromPath(rootB,getPath(rootA,nodeA)));







