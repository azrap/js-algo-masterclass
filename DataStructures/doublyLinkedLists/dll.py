class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
        self.prev = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self, val):
        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            newNode.prev = self.tail
            self.tail = newNode
        self.length += 1
        return self

    def pop(self):
        if not self.tail:
            return None

        poppedNode = self.tail
        print('poppedNode Val', self.tail)

        if self.tail == 1:
            self.tail = None
            self.head = None
        else:
            self.tail = poppedNode.prev
            poppedNode.prev = None
            self.tail.next = None

        self.length -= 1
        return poppedNode


dll = DoublyLinkedList()
dll.push(2)
dll.push(4)
dll.push(6)
dll.push(8)
dll.push(10)

print(dll.head.val)
print(dll.tail.val)
print(dll.length)

print('popped Node', dll.pop().val)
print('popped length', dll.length)
print('popped tail', dll.tail.val)
