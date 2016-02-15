# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None



class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head is None or head.next is None:
            return head
        node = head
        prev = None
        cur = node
        next = node.next
        while cur.next is not None:
            cur.next = prev
            prev = cur
            cur = next
            next = next.next
        cur.next = prev
        return cur


head = ListNode(0)
prev = head

for i in range(1, 5):
    node = ListNode(i)
    prev.next = node
    prev = node

sol = Solution()
print sol.reverseList(head)
