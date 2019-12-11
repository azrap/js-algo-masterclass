class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    else {

      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode

    }
    this.length++
    return this


  }

  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      console.log("WORKING FROM START");
      var count = 0;
      var current = this.head;

      while (count !== index) {
        current = current.next; //traverse the list
        count++;
      }
    } else {
      console.log("WORKING FROM END");
      var count = this.length - 1;
      var current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    var node = this.get(index);
    if (node != null) {
      node.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var beforeNode = this.get(index - 1);
    var newNode = new Node(val);
    var afterNode = beforeNode.next;

    if (beforeNode != null) {
      beforeNode.next = newNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
      newNode.prev = beforeNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (the index == 0, shift)



  }
}

var list = new DoublyLinkedList();
list.shift();

list.push("hermione");
list.push("harry");
list.push("ron");
console.log(list);

list.unshift("snape");
list.unshift("malfoy");
list.unshift("dumbledore");

console.log(list);
console.log("item 4, ", list.get(4));
// console.log("item 1 set, ", list.set(1, "HAGRIDDDD"));
console.log("item 1 insert, ", list.insert(1, "TONKS"));
console.log(list);
