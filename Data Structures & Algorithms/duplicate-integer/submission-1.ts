class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        return nums.length !== Array.from(new Set(nums)).length
    }
}
