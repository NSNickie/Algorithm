/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    const map = new Map()
    let max = 0
    let left = 0
    for (let i = 0; i < fruits.length; i++) {
        if (!map.has(fruits[i])) {
            if (map.size >= 2) {
                while (map.size >= 2) {
                    map.set(fruits[left], map.get(fruits[left]) - 1)
                    if (map.get(fruits[left]) <= 0) {
                        map.delete(fruits[left])
                    }
                    left++
                }
            }
        }
         map.set(fruits[i], (map.get(fruits[i]) || 0) + 1)
        max = Math.max(i - left + 1, max)
        // console.log(map)
    }
    return max
};