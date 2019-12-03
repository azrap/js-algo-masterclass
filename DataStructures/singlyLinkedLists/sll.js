//node stores piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }


}

class singlylinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head


        }
        else {
            this.tail.next = newNode
            this.tail = newNode


        }

        this.length += 1
        return this

    }

    pop() {
        if (this.length === 0) return undefined;

        var current = this.head
        var newTail = current

        while (current.next) {
            newTail = current
            current = current.next

        }

        this.tail = newTail
        this.tail.next = null
        this.length -= 1
        return current

    }

    shift() {
        if (this.length === 0) return undefined
        let current = this.head
        this.head = current.next
        current.next = null

        this.length -= 1

        return current




    }

    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        }

        newNode.next = this.head
        this.head = newNode
        this.length += 1
        return this

    }
}

var sll = new singlylinkedlist()
sll.push(5)
sll.push(7)
sll.push(9)
sll.push(11)
sll.push(13)
console.log('pre-pop', sll)
sll.pop()

console.log('post-pop', sll)
sll.shift()
console.log('post-shift', sll)
sll.unshift(15)
console.log('post-unshift', sll)


