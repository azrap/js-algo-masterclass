class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enQueue(val) {
        var newNode = new Node(val)

        if (!this.first) {
            this.first = newNode
            this.last = newNode

            // console.log('hi')

        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size += 1
        return this

    }

    deQueue() {
        if (!this.first) {
            return undefined
        }


        let dqNode = this.first

        if (this.size === 1) {
            this.first = null
            this.last = null
        }
        else {
            this.first = dqNode.next
            dqNode.next = null
        }

        this.size -= 1
        return this







    }





}


queue = new Queue()
queue.enQueue(5)
queue.enQueue(6)
queue.enQueue(7)
queue.enQueue(8)
console.log('queue', queue)
queue.deQueue()
console.log(queue)
queue.deQueue()
console.log(queue)
queue.deQueue()
console.log(queue)
queue.deQueue()
console.log(queue)
