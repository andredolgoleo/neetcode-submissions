class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashTable = new Map();

        for (const num of nums) {
            if (hashTable.has(num)) {
                hashTable.set(num, hashTable.get(num) + 1);
                continue;
            }

            hashTable.set(num, 1);
        }
      
        return Array.from(hashTable
            .entries())
            .sort(([_, valueA], [__, valueB]) => valueB - valueA)
            .slice(0, k).map(([key]) => key)
    }
}
