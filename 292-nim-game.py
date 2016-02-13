class Solution(object):
    def canWinNim(self, n):
        if n % 4 == 0:
            return False
        elif n % 5 == 0:
            return True
        elif n % 6 == 0:
            return True
        else:
            return False