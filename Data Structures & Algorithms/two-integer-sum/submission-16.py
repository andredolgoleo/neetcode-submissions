class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}
        result: List[int] = []

        for i, num in enumerate(nums):    
            candidate_pare = target - num

            if candidate_pare not in hashMap:
                hashMap[num] = i
                continue

            
            if i != hashMap[candidate_pare]:
                result.append(hashMap[candidate_pare])
                result.append(i)
                break
                

        return result    
            
