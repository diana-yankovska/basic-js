const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.length > 0 ?
    backyard.reduce((sumCats, currentArr) => sumCats +
      currentArr.reduce((catsInCurrentArr, item) => item === "^^" ? ++catsInCurrentArr : catsInCurrentArr, 0),
      0) :
    0;
};