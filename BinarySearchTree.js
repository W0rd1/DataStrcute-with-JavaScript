
let LinkedList = require('./QueueLinkedList');

class Queue{
  constructor(){
    this.list = new LinkedList();
    this.size = 0;
  }
  enqueue(value){
    this.list.append(value);
    this.size++;
  }
  dequeue(){
    this.size--;
    return this.list.removeFromFront();
  }
}

class Node{
  constructor(value){
    this.data = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  isEmpty(){return this.root == null}
  insert(value){
    let node = new Node(value);
    if(this.isEmpty()){
      this.root = node;
    }else{
      this.insertMethod(this.root, node)
    }
  }
  insertMethod(root, node){
    if(node.data < root.data){
      if(root.left == null){
        root.left = node;
      }else{
        this.insertMethod(root.left, node);
      }
    }else{
      if(root.right == null){
        root.right = node;
      }else{
        this.insertMethod(root.right, node);
      }
    }
  }
  search(root, value){
    if(!root){
      return false;
    }else{
      if(root.data == value){
        return true;
      }else if(value < root.data){
        return this.search(root.left, value)
      }else{
        return this.search(root.right, value)
      }
    }
  }
  preOrder(root){
    if(root){
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root){
    if(root){
      this.preOrder(root.left);
      console.log(root.data);
      this.preOrder(root.right);
    }
  }
  postOrder(root){
    if(root){
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log(root.data);
    }
  }
  levelOrder(){
    if(this.isEmpty()){return console.log("Tree is empty")}
    let ListQueue = new Queue();
    ListQueue.enqueue(this.root);
    while(ListQueue.size){
      let current = ListQueue.dequeue();
      console.log(current.data)
      if(current.left){
        ListQueue.enqueue(current.left)
      }
      if(current.right){
        ListQueue.enqueue(current.right)
      }
    }
  }
  min(root){
    if(!root.left){
      return root.data;
    }else{
      return this.min(root.left)
    }
  }
  max(root){
    if(!root.right){
      return root.data;
    }else{
      return this.max(root.right)
    }
  }

  delete(value){
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value){
    if(root === null){return null}
    if(value < root.data){
      root.left = this.deleteNode(root.left, value)
    }else if(value > root.data){
      root.right = this.deleteNode(root.right, value)
    }else{
      if(!root.left && !root.right){
        return null;
      }else if(!root.left){
        return root.right;
      }else if(root.right){
        return root.left;
      }
      root.data = this.min(root.right);
      root.right = this.deleteNode(root.right, root.data)
    }
    return root;
  }
}
let bst = new BinarySearchTree();