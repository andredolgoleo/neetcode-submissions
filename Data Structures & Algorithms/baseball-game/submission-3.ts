class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

    calPoints(operations: string[]): number {
        const result = [];

        for(let i = 0; i < operations.length; i++) {
            switch(operations[i]) {
                case("+"): {
                    const peak = result.length - 1;
                result.push(result[peak] + result[peak - 1]);
                continue;
                }
                case("C"): {
                    result.pop();
                continue;
                }
                case("D"): {
                    result.push(result[result.length - 1] * 2);
                continue;
                }
                default: result.push(+operations[i])
            }

        }

        return result.reduce((a, b) => a + b, 0)
    }
}
