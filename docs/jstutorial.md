## 2235. Add Two Numbers

Given two integers `num1` and `num2`, return *the **sum** of the two integers*.

```javascript
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(num1, num2) {
    return num1+num2
};
```

## 2469. [Convert the Temperature](https://leetcode.cn/problems/convert-the-temperature/)

You are given a non-negative floating point number rounded to two decimal places `celsius`, that denotes the **temperature in Celsius**.

You should convert Celsius into **Kelvin** and **Fahrenheit** and return it as an array `ans = [kelvin, fahrenheit]`.

Return *the array `ans`.* Answers within `10-5` of the actual answer will be accepted.

```javascript
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    return [celsius + 273.15, celsius * 1.8 + 32]
};
```

