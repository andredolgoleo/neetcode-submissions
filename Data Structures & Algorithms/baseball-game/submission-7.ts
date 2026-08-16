class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

    calPoints(operations: string[]): number {
        const result = [];

        for (let i = 0; i < operations.length; i++) {
            const peak = result.length - 1;

            switch (operations[i]) {
                case "+": {
                    result.push(result[peak] + result[peak - 1]);
                    continue;
                }
                case "C": {
                    result.pop();
                    continue;
                }
                case "D": {
                    result.push(result[peak] * 2);
                    continue;
                }
                default:
                    result.push(+operations[i]);
            }
        }

        return result.reduce((a, b) => a + b, 0);
    }
}
