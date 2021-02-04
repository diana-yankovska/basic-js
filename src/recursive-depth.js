const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;

    let maxItemDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      let itemDepth = this.calculateDepth(arr[i]);
      if (itemDepth > maxItemDepth) {
        maxItemDepth = itemDepth;
      }
    }
    return 1 + maxItemDepth;
  }
};