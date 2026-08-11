class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
const result = [];

        const prefix = [];
        let total = 1;

        for (const num of nums) {
            prefix.push(total);
            total *= num;
        }

        const suffix = [];
        let totalS = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            suffix.push(totalS)
            totalS *= nums[i];
        }

        for(let i = 0; i < prefix.length; i++) {
            result.push(prefix[i])
        }
  
        let counter = 0
  
        for(let i = suffix.length - 1; i >= 0; i--) {
            result[i] = result[i] * suffix[counter]
            counter += 1;
        }
  
        return result;
    }
}
