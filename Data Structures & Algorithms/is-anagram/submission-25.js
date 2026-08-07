class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const hashMap = new Map();

        for (const letter of s) {
            if (hashMap.has(letter)) {
                const value = hashMap.get(letter);
                hashMap.set(letter, value + 1);
                continue;
            }

            hashMap.set(letter, 1);
        }

        for (const letter of t) {
            if (!hashMap.has(letter) || hashMap.get(letter) === 0) {
                return false;
            }

            const value = hashMap.get(letter);
            hashMap.set(letter, value - 1);
        }

        return true;
    }
}
