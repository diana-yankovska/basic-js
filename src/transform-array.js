const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("Input argument is not array");
  }
  let resultArr = [];

  for (i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-prev": {
        if (resultArr.length !== 0) {
          if (i - 2 < 0 || arr[i - 2] !== "--discard-next") {
            resultArr.push(resultArr[resultArr.length - 1]);
          }
        }
        break;
      }
      case "--discard-prev": {
        if (i - 2 < 0 || arr[i - 2] !== "--discard-next") {
          resultArr.pop();
        }
        break;
      }
      case "--double-next": {
        i++;
        if (i < arr.length) {
          resultArr.push(arr[i]);
          resultArr.push(arr[i]);
        }
        break;
      }
      case "--discard-next": {
        i++;
        break;
      }
      default: {
        resultArr.push(arr[i]);
      }
    }
  };
  return resultArr;
}

