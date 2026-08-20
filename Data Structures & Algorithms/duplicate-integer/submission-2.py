class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hashSet = set()

        for i in range(len(nums)):
            if hashSet.__contains__(nums[i]):
                return True
            hashSet.add(nums[i])

        return False
        