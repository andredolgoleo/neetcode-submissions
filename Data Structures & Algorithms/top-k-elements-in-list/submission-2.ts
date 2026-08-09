class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    insertionSort(nums) {
        for (let i = 0; i < nums.length; i++) {
            let currentPointer = i;

            while (currentPointer && nums[currentPointer - 1] >= nums[currentPointer]) {
                [nums[currentPointer], nums[currentPointer - 1]] = [
                    nums[currentPointer - 1],
                    nums[currentPointer],
                ];

                currentPointer -= 1;
            }
        }

        return nums;
    }

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

        for (let i = 0; i < nums.length; i++) {
            const arr = buckets.get(i);

            this.insertionSort(arr);
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
