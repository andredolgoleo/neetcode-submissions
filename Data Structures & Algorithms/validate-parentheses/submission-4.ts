class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) {
            return false;
        }

        const dir = {
            "}": "{",
            ")": "(",
            "]": "[",
        };

        const stack = [];

        for(const brace of s) {
            if (dir[brace]) {
                const lastBrace = stack.pop();

                if (dir[brace] !== lastBrace) {
                    return false;
                }
            } else {
                stack.push(brace)
            }
        }

        return !stack.length;
    }
}
