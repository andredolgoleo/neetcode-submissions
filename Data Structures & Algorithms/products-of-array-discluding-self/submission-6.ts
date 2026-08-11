class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = [];

        let total = 1;

        for (const num of nums) {
            result.push(total);
            total *= num;
        }

        let totalS = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] = totalS * result[i]
            totalS *= nums[i];
        }

        return result;
    }
}
