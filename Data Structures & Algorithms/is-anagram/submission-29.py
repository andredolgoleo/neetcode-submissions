class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hashMapS = {}
        hashMapT = {}

        for _, c in enumerate(s):
            if hashMapS.get(c):
                hashMapS[c] += 1
                continue
            hashMapS[c] = 1
        
        for _, c in enumerate(t):
            if hashMapT.get(c):
                hashMapT[c] += 1
                continue
            hashMapT[c] = 1

        for _, c in enumerate(s):
            if hashMapS.get(c) != hashMapT.get(c):
                return False

        return True