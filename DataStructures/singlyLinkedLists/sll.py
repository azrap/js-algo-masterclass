
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Singlylinkedlist:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def __str__(self):
        node = self.head
        str = " "
        while node:
            str += f"{node.value} "
            node = node.next
        return f"these are the values of this SLL: {str}"

    def push(self, val):
        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = self.head
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1
        return self

    def pop(self):
        # edge case if the SLL is empty:
        if self.length == 0:
            return None
        current = self.head
        newTail = current
        while current.next:
            newTail = current
            current = current.next
        self.tail = newTail
        self.tail.next = None
        self.length -= 1
        return current

    def shift(self):
        if self.length == 0:
            return None

        currentHead = self.head
        self.head = currentHead.next
        currentHead.next = None
        self.length -= 1
        return currentHead

    def unshift(self, val):
        newHead = Node(val)
        if self.length == 0:
            self.head = newHead
            self.tail = self.head

        newHead.next = self.head
        self.head = newHead
        self.length += 1
        return self

    def get(self, index):
        if index < 0 or self.length == 0 or index >= self.length:
            return False

        counter = 0
        current = self.head
        while counter < index:
            current = current.next
            counter += 1

        return current

    def set(self, index, value):
        current = self.get(index)
        if current:
            current.value = value
            return self

        return False

    def insert(self, index, value):

        if index < 0 or self.length == 0 or index > self.length:
            return False

        if index == self.length:
            self.push(value)

        elif index == 0:
            self.unshift(value)

        else:
            newNode = Node(value)
            prev = self.get(index-1)
            newNode.next = prev.next
            prev.next = newNode

        self.length += 1
        return self

    def remove(self, index):

        if index < 0 or self.length == 0 or index >= self.length:
            return False

        # edge case scenarios:

        if index == 0:
            return self.shift()

        if index == self.length-1:
            return self.pop()

        # non-edge case scenarios:
        prev = self.get(index-1)
        current = prev.next
        prev.next = current.next
        self.length -= 1
        return current

    def reverse(self):
        if not self.head:
            return null
        if self.length == 1:
            return self

        # all the pointers start at the same place
        current = self.head
        prev = None
        nextNode = None

        # swap head and tail
        self.head = self.tail
        self.tail = current

        while current.next:
            nextNode = current.next
            current.next = prev
            prev = current
            current = nextNode

        current.next = prev


SLL = Singlylinkedlist()

SLL.push(5)
SLL.reverse()
print('reversed linked list', SLL.__str__())

SLL.push(7)
SLL.push(9)
SLL.push(11)
SLL.push(13)
print('the SLL', SLL.__str__())
SLL.pop()
print('post-pop', SLL.__str__())
SLL.shift()
print('post-shift', SLL.__str__())
SLL.unshift(15)
print('post-unshift', SLL.__str__())
val = SLL.get(1)
print('getting an item at index 1:', val.value)
SLL.set(1, 39)
print('post-value change from 7 to 39', SLL.__str__())
index = 0
value = 45
SLL.insert(index, value)
print(f'post-insert {value} at index {index}', SLL.__str__())
SLL.remove(index)
print(f'post-remove {value} at index {index}', SLL.__str__())
SLL.reverse()
print('reversed linked list', SLL.__str__())
