const Calculator = {
  add(num1, num2) {
    if (num1 + num2 > 10) {
      return num1 + num2 == "HIGER THAN 10";
    } else if (num1 + num2 < 10) {
      return num1 + num2 == "LOWER THAN 10";
    } else {
      return 10;
    }
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },
};

module.exports = Calculator;
