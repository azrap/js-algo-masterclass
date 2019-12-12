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

    def __str__(self):
        node = self.head
        str = "[ "
        while node:
            str += f"{node.val}, "
            node = node.next
        return str + "]"

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

    def shift(self):
        if not self.head:
            return None

        poppedNode = self.head

        if self.tail == 1:
            self.head = None
            self.tail = None
        else:
            self.head = poppedNode.next
            self.head.prev = None
            poppedNode.next = None

        self.length -= 1
        return poppedNode

    def unshift(self, val):
        new_node = Node(val)

        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            self.head.prev = new_node
            new_node.next = self.head
            self.head = new_node

        self.length += 1
        return self

    def get(self, index):
        if index < 0 or index >= self.length:
            return 'invalid index'

        if index < (self.length/2):
            counter = 0
            node = self.head
            while counter < index:
                node = node.next
                counter += 1
        else:
            counter = self.length-1
            node = self.tail
            while counter > index:
                node = node.prev
                counter -= 1
        return node


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

print('shifted head node val', dll.shift().val)

print('put the head back on', dll.unshift(2))
print('new length should be 4', dll.length)
print('dll.__str__', dll.__str__())
print('node at index 2', dll.get(2).val)
print('node at index 1', dll.get(1).val)
