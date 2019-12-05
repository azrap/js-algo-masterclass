//node stores piece of data - val
// reference to next node - next

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }


}

class singlylinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(value) {
        var newNode = new Node(value)
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

    unshift(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        }

        newNode.next = this.head
        this.head = newNode
        this.length += 1
        return this

    }


    get(index) {
        let counter = 0
        if (!this.head || index < 0 || index >= this.length) return undefined
        let current = this.head
        while (counter < index) {
            current = current.next
            counter += 1
        }
        return current

    }

    set(index, value) {
        let current = this.get(index)
        if (current) {
            current.value = value
            return this
        }
        return false
    }

    insert(index, value) {

        //if index is invalid:
        if (index < 0 || index > this.length) return false


        if (index === 0) {
            this.unshift(value)
        }

        else if (index === this.length) {
            this.push(value)
        }
        // non edge case scenarios:
        else {
            let prev = this.get(index - 1)
            let newNode = new Node(value)
            newNode.next = prev.next
            prev.next = newNode
        }

        this.length++

        return this


    }

    remove(index) {

        if (index < 0 || index >= this.length) {
            return false
        }

        if (index === 0) return this.shift()

        if (index === this.length - 1) return this.pop()

        // non-edge cases

        let prev = this.get(index - 1)
        let removed = prev.next
        prev.next = removed.next
        this.length--
        return removed

    }

    reverse() {

        if (!this.head) return null

        if (this.length === 1) return this

        let prev = null
        let current = this.head
        let nextNode = current.next
        this.head = this.tail
        this.tail = current

        while (current.next) {
            current.next = prev
            prev = current
            current = nextNode
            nextNode = current.next
        }

        current.next = prev

        return this



    }

    get_str() {

        if (!this.head) {
            return "there are no nodes"
        }

        let str = "these are the nodes in this SLL: "
        let current = this.head
        while (current) {
            str += `${current.value}, `
            current = current.next
        }

        return str

        // }
    }


}

var sll = new singlylinkedlist()
sll.push(5)
sll.push(7)
sll.push(9)
sll.push(11)
sll.push(13)

console.log('this original ones', sll.get_str())

console.log('pre-pop', sll)
sll.pop()

console.log('post-pop', sll)
sll.shift()
console.log('post-shift', sll)
sll.unshift(15)
console.log('post-unshift', sll)
console.log('get index', sll.get(1))
sll.set(1, 39)
console.log('post-set from 7 to 39', sll.get(1))
val = sll.set(15, 39)
console.log('should return false', val)


index = 3
value = 45

sll.insert(index, value)

console.log(`should insert ${value} at index ${index}`, sll.get_str())

removed = sll.remove(index)

console.log(`should remove ${removed.value} at index ${index}`, sll.get_str())

sll.push(17)
sll.push(19)
sll.push(21)
sll.push(23)

console.log('pre-reverse', sll.get_str())

sll.reverse()

console.log('should reverse the sll', sll.get_str())


