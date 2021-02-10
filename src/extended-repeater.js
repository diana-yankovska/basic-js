const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.additionSeparator = options.additionSeparator || "|";
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.separator = options.separator || "+";
  options.repeatTimes = options.repeatTimes || 1;

  let additionStr = options.addition !== undefined ?
    new Array(options.additionRepeatTimes).fill(String(options.addition)).join(options.additionSeparator) :
    "";
  return new Array(options.repeatTimes).fill(String(str) + additionStr).join(options.separator);
};
