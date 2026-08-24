class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}
        result: List[int] = []

        for i, num in enumerate(nums):    
            candidate_pare = target - num

            if candidate_pare in hashMap:
                return [hashMap[candidate_pare], i]
            hashMap[num] = i
                

        return result
            
