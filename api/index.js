const getSum = (num1, num2) => num1 + num2;

const getMax = (arr) => {
  let max = arr[0];

  for (num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

module.exports = { getSum, getMax };
