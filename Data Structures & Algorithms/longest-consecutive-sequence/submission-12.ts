class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums.length) return 0;

        const hashSet = new Set(nums);
        let maxStreak = 1;

        for (const num of hashSet) {
            if (hashSet.has(num - 1)) {
                continue;
            }

            let currStart = num;
            let streak = 1;

            while (hashSet.has(currStart + 1)) {
                streak += 1;
                currStart += 1;
            }

            if (streak > maxStreak) {
                maxStreak = streak;
            }
        }

        return maxStreak
    }
}
