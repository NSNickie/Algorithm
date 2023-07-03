/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let arr = []
    for (let i = 0; i < mat.length; i++) {
        let left = 0
        let right = mat[i].length - 1
        let mid
        while (left < right) {
            mid = parseInt((right + left) / 2)
            if (mat[i][mid] === 1) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        if (mat[i][mat[i].length - 1] === 1) {
            arr.push(right + 1)
        } else {
            arr.push(right)
        }

    }

    let indices = Array.from(arr.keys())
    return indices.sort((a, b) => {
        return arr[a] - arr[b]
    }).slice(0,k)


};