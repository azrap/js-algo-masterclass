
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


SLL = Singlylinkedlist()

SLL.push(5)
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
# print(SLL.length)
# print(SLL.tail.value)
