/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s
    const rows = Array.from({ length: numRows }, () => [])
    let index = 0
    let direction = 1
    for (const char of s) {
        rows[index].push(char)
        index += direction
        if (index === 0 || index === numRows - 1) {
            direction *= -1
        }

    }
    // console.log(rows)
    return rows.flat().join()
};