class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    // 45 - total
    isValidSudoku(board: string[][]): boolean {
        for (let row = 0; row < board.length; row++) {
            const seenRow = new Set();
            const currRow = board[row];

            for (let col = 0; col < currRow.length; col++) {
                if (currRow[col] === ".") continue;

                if (seenRow.has(currRow[col])) {
                    return false;
                }

                seenRow.add(currRow[col]);
            }
        }

        for (let row = 0; row < board.length; row++) {
            const seenCol = new Set();

            for (let col = 0; col < board.length; col++) {
                if (board[col][row] === ".") continue;

                if (seenCol.has(board[col][row])) {
                    return false;
                }

                seenCol.add(board[col][row]);
            }
        }

        for (let square = 0; square < board.length; square++) {
            const seenSquare = new Set();

            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    const r = Math.floor(square / 3) * 3 + row;
                    const c = (square % 3) * 3 + col;

                    if (board[r][c] === ".") continue;
                    if (seenSquare.has(board[r][c])) {
                        return false;
                    }

                    seenSquare.add(board[r][c]);
                }
            }
        }

        return true;
    }
}
