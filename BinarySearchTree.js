const Queue = require('./QueueLinkedList');

class Node{
  constructor(value){
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
    this.size = 0;
  }
  isEmpty(){return this.size === 0}
  getSize(){return this.size}

  insert(value){
    let node = new Node(value);
    if(this.root === null){
      this.root = node;
    }else{
      this.insertNode(this.root, node);
    }
    return this.size++;
  }
  insertNode(root, node){
    if(node.data < root.data){
      if(root.left === null){
        root.left = node;
      }else{
        this.insertNode(root.left, node)
      }
    }else{
      if(root.right === null){
        root.right = node;
      }else{
        this.insertNode(root.right, node);
      }
    }
  }
  /*Function to be implemented */
  // Search(root, value)
  // DFS:Traverse System[ done
     // preorder(root)
     // inorder(root)
     // postorder(root)
  //]
  // BFS:LevelOrder() [done]
  // Min(root) [done]
  // Max(root) [done]
  // delete(root, value) [done]
  search(root, value){
    if(root === null){
      return console.log(false);
    }else if(value < root.data){
      this.search(root.left, value)
    }else if(value > root.data){
      this.search(root.right, value)
    }
    else{
      return console.log(true)
    }
  }
  preorder(root){
    if(root){
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
    return;
  }
  inorder(root){
    if(root){
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
    return;
  }
  postorder(root){
    if(root){
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.data);
    }
    return;
  }
  levelOrder(){
    let list = new Queue();
    list.prepend(this.root);
    while(list.getSize()){
      let node = list.removeFromFront();
      if(node){
        console.log(node.data)
        if(node.left){
          list.append(node.left)
        }
        if(node.right){
          list.append(node.right)
        }
      }
    }
  }
  min(root){
    if(!root.left){
      return root.data;
    }
    this.min(root.left);
  }
  max(root){
    if(!root.right){
      return root.data;
    }
    this.max(root.right);
  }
  delete(value){
    this.root = this.deleteNode(this.root, value);
    //return;
  }
  deleteNode(root, value){
      if(root === null){
        return null;
      }
        if(value < root.data){
          root.left = this.deleteNode(root.left, value);
        }else if(value > root.data){
          root.right = this.deleteNode(root.right, value)
        }else{
          if(!root.left && !root.right){
            return null;
          }else if(!root.left){
            return root.right;
          }else if(!root.right){
            return root.left;
          }
          root.data = this.min(root.right);
          root.right = this.deleteNode(root.right, root.data);
        }
        return root;
  }
}

const bst = new BinarySearchTree();