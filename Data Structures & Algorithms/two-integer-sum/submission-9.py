class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # [3,4,5,6]
        hashMap = {} # { 4: 0, 3: 1, 2: 2, 1: 3 }
        result: List[int] = []

        for i, num in enumerate(nums):    
            candidate_pare = target - num

            if hashMap.get(candidate_pare, None) is None:
                hashMap[num] = i

            if hashMap.get(candidate_pare, None) is None:
                continue
            elif i != hashMap[candidate_pare]:
                result.append(hashMap[candidate_pare])
                result.append(i)
                break
                

        return result    
            
