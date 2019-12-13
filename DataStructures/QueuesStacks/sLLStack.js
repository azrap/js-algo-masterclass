class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        var newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        }
        else {
            newNode.next = this.first
            this.first = newNode

        }
        this.size++
        return this



    }
}

stack = new Stack()
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
console.log(stack)