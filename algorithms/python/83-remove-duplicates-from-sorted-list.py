import pudb

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        pu.db
        if head == None or head.next == None:
            return head
        node = head
        prevVal = None
        prevNode = node
        while (node.next != None):
            curVal = node.val
            if prevVal == curVal:
                node.next = node.next.next
            prevVal = curVal
            prevNode = node
            node = node.next
        if prevNode.val == node.val:
            prevNode.next = None
        return head


head = ListNode(0)
nexy = ListNode(0)
head.next = nexy

sol = Solution()
sol.deleteDuplicates(head)