class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums: number[], k: number): number[] {
        const buckets = new Map(
            Array.from(Array(nums.length + 1), (_, idx) => {
                return [idx, []];
            }),
        );

        const frequenciesCount = new Map();

        for (const num of nums) {
            if (frequenciesCount.has(num)) {
                frequenciesCount.set(num, frequenciesCount.get(num) + 1);
                continue;
            }

            frequenciesCount.set(num, 1);
        }

        for (const [key, value] of frequenciesCount) {
            const bucketContent = buckets.get(Math.floor(value));

            bucketContent.push(key);
        }

        const result = [];

        for (let i = buckets.size - 1; i >= 0; i--) {
            const value = buckets.get(i);

            if (value.length < 1) {
                continue;
            }

            for (let j = value.length - 1; j >= 0; j--) {
 result.push(value[j]);

                if (result.length === k) {
                    return result;
                }

               
            }
        }
    }
}
