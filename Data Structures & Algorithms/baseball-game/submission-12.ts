class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

    calPoints(operations: string[]): number {
        const result = [];
        let sum = 0;

        for (let i = 0; i < operations.length; i++) {
            const peak = result.length - 1;
            switch (operations[i]) {
                case "+": {
                    result.push(result[peak] + result[peak - 1]);

                    sum += result[result.length - 1];
                    break;
                }
                case "C": {
                    const lastElem = result.pop();
                    sum -= lastElem;
                    break;
                }
                case "D": {
                    result.push(result[peak] * 2);
                    sum += result[result.length - 1];
                    break;
                }
                default:
                    result.push(+operations[i]);
                    sum += +operations[i];
                    break;
            }
        }

        return sum;
    }
}
