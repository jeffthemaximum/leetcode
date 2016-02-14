'''
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
'''
import pudb

class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        for num in nums:
            if num == 0:
                nums.remove(0)
                nums.append(0)

    def moveZeroes2(self, nums):
        pu.db
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        if nums:
            zero, cur = -1, 0
            while cur < len(nums):
                if  nums[cur] != 0:
                    # update zero index when current is not zero
                    zero += 1
                    nums[cur], nums[zero] = nums[zero], nums[cur]
                cur += 1


sol = Solution()
print sol.moveZeroes2([4, 3, 0, 6, 7, 2, 0, 5, 1, 0])