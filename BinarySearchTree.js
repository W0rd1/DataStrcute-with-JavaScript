const Queue = require('./QueueLinkedList');

class List{
  constructor(){
    this.list = new Queue();
  }
  Enqueue(value){
    this.list.prepend(value);
    return this.size++;
  }
  Dequeue(){
    this.list.removeFromFront();
    return this.size--;
  }
}

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
  // DFS:Traverse System[
     // preorder(root)
     // inorder(root)
     // postorder(root)
  //]
  // BFS:LevelOrder()
  // Min(root)
  // Max(root)
  // delete(root, value)
  // All functions going to be available as shortly
}

const bst = new BinarySearchTree();

