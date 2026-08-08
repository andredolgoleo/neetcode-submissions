class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashTable = new Map();

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const sortedStr = str.split("").sort().join("");

            if (hashTable.has(sortedStr)) {
                const arr = hashTable.get(sortedStr)
                arr.push(str);
                continue;
            }

            hashTable.set(sortedStr, [str]);
        }

        return Array.from(hashTable.values());
    }
}
