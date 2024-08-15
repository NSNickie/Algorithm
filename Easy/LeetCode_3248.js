/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
    const arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = i*n + j 
        }
    }
    console.log(arr)
    let row = 0
    let col = 0
    for (const command of commands) {
        switch (command) {
            case 'UP':
                row--
                break
            case 'DOWN':
                row++
                break
            case 'LEFT':
                col--
                break
            case 'RIGHT':
                col++
                break
        }
    }
    return arr[row][col]
};