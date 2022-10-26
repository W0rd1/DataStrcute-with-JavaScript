class Node{
  constructor(value){
    this.data = value;
    this.next = null;
    this.previous = null;
  }
}

class QueueLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty(){return this.size === 0}
  getSize(){return this.size}
  prepend(value){
    let node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
    }else{
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
    return this.size++;
  }
  append(value){
    let node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
    }else{
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    return this.size++;
  }
  removeFromFront(){
    if(this.isEmpty()){return console.log('Queue is empty')}
    let value = this.head.data;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd(){
    if(this.isEmpty()){return console.log('Queue is empty')}
    let value = this.tail.data;
    if(this.tail.previous){
      this.tail = this.tail.previous;
      this.tail.next = null;
    }else{
      this.size--;
      return console.log(value)
    }
  }
  reverse(){return console.log(this.reverseQueue(this.tail))}
  
  reverseQueue(node){
    let counter = 0;
    let Queue = {};
    if(node){
      while(counter < this.size){
        Queue[counter] = node.data;
        node = node.previous;
        counter++;
      }
      this.reverseQueue(node);
    }
    return console.log(Queue);
  }
  print(){return console.log(this.printQueue(this.head))}
  printQueue(node){
    let counter = 0;
    let Queue = {};
    if(node){
      while(counter < this.size){
        Queue[counter] = node.data;
        node = node.next;
        counter++;
      }
      this.printQueue(node);
    }
    return console.log(Queue);
  }
  
}

module.exports = QueueLinkedList;