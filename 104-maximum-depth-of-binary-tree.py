'''
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
'''

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def maxDepth(self, root, depth=0):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return depth
        return max(
            self.maxDepth(root.left, depth+1), 
            self.maxDepth(root.right, depth+1)
        )