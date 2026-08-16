class MinStack {
    private arr = [];
    private minStack = [];
 
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (val <= this.minStack.at(-1)) {
            this.minStack.push(val);
        }

        if (!this.minStack.length) {
            this.minStack.push(val);
        }

        this.arr.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const lastElem = this.arr.pop();

        if (lastElem <= this.minStack.at(-1)) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr.at(-1)
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1) || 0
    }
}
