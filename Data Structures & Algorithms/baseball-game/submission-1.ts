class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

    calPoints(operations: string[]): number {
        const result = [];

        for(let i = 0; i < operations.length; i++) {
            if (operations[i] === '+') {
                const peak = result.length - 1;
                result.push(result[peak] + result[peak - 1]);
                continue;
            }

            if (operations[i] === 'C') {
                result.pop();
                continue;
            }

            if (operations[i] === 'D') {
                result.push(result[result.length - 1] * 2);
                continue;
            }

            result.push(+operations[i]);
        }

        return result.reduce((a, b) => a + b, 0)
    }
}
