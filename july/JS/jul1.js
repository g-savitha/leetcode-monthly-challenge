//brute force

let arrangeCoins = function (n) {
  let k = 0;
  while (n > 0) {
    k++;
    n -= k;
  }
  return n === 0 ? k : k - 1;
};

//binary search
let arrangeCoins = function (n) {
  let low = 0,
    high = n;
  let k, current;

  while (low <= high) {
    k = parseInt(low + (high - low) / 2);
    current = (k * (k + 1)) / 2;
    if (current === n) {
      return k;
    }
    if (n > current) {
      low = k + 1;
    } else {
      high = k - 1;
    }
  }
  return high;
};

//Math approach
let arrangeCoins = function (n) {
  return parseInt((Math.sqrt(8 * n + 1) - 1) / 2);
};
