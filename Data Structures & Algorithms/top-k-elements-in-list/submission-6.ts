class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const frequencies = new Map<number, number>();

        for (const num of nums) {
            frequencies.set(num, (frequencies.get(num) ?? 0) + 1);
        }

        const frequencyBuckets: number[][] = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        for (const [num, frequency] of frequencies) {
            frequencyBuckets[frequency].push(num);
        }

        const result: number[] = [];

        for (let frequency = nums.length; frequency >= 1; frequency--) {
            for (const num of frequencyBuckets[frequency]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}