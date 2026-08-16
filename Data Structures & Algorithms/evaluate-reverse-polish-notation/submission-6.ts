class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        for (const token of tokens) {
            switch (token) {
                case "+": {
                    const elem = stack.pop();
                    const secondElem = stack.pop();

                    stack.push(elem + secondElem);
                    break;
                }
                case "-": {
                    const elem = stack.pop();
                    const secondElem = stack.pop();

                    stack.push(secondElem - elem);
                    break;
                }
                case "*": {
                    const elem = stack.pop();
                    const secondElem = stack.pop();

                    stack.push(elem * secondElem);
                    break;
                }
                case "/": {
                    const elem = stack.pop();
                    const secondElem = stack.pop();

                    stack.push(Math.trunc(secondElem / elem));
                    break;
                }
                default:
                    stack.push(+token);
            }
        }

        return stack[0];
    }
}
