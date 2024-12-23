/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let maxTolerant = 0;
  let currTolerant = 0;
  let defaultClients = 0;
  for (let i = 0; i < customers.length; i++) {
    if (i < minutes) {
      if (grumpy[i] === 1) {
        currTolerant += customers[i];
      } else {
        defaultClients += customers[i];
      }
      // console.log(defaultClients)
      maxTolerant = Math.max(currTolerant, maxTolerant);
      continue;
    }
    if (grumpy[i] === 1) {
      currTolerant += customers[i];
    } else {
      defaultClients += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      currTolerant -= customers[i - minutes];
    }
    maxTolerant = Math.max(currTolerant, maxTolerant);
    // console.log(defaultClients)
  }
  return defaultClients + maxTolerant;
};
