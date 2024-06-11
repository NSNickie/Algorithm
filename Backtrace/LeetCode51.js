/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const chessboard = Array.from({ length: n }, () => new Array(n).fill('.'))
    const result = []
    const path = chessboard.slice()

    function canPlace(row, column) {
        for (let i = 0; i < n; i++) {
            if (path[i][column] === 'Q' || path[row][i] === 'Q') {
                return false
            }
        }
        for (let i = row, j = column; i >= 0 && j >= 0; i--, j--) {
            if (path[i][j] === 'Q') {
                return false
            }
        }
        for (let i = row, j = column; i < n && j >= 0; i++, j--) {
            if (path[i][j] === 'Q') {
                return false
            }
        }
        for (let i = row, j = column; i >= 0 && j < n; i--, j++) {
            if (path[i][j] === 'Q') {
                return false
            }
        }
        for (let i = row, j = column; i < n && j < n; i++, j++) {
            if (path[i][j] === 'Q') {
                return false
            }
        }
        return true
    }

    function dfs(row) {
        if (row === n) {
            result.push(path.map(row => row.join('')))
            return
        }

        for (let col = 0; col < n; col++) {
            if (canPlace(row, col)) {
                path[row][col] = 'Q'
                dfs(row + 1)
                path[row][col] = '.'
            }
        }
    }
    dfs(0)
    return result


};