const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  if ("addition" in options) options.addition = String(options.addition);
  if (options.repeatTimes == undefined) return str.concat(options.addition);
  let final = str;
  if ("repeatTimes" in options) {
    for (let i = 0; i < options.repeatTimes - 1; i ++) {
      if ("addition" in options) final = final.concat(options.addition);
        if ("additionRepeatTimes" in options) {
          for (let j = 0; j < options.additionRepeatTimes - 1; j ++) {
            if ("additionSeparator" in options) final = final.concat(options.additionSeparator);
            else final = final.concat("|");
            final = final.concat(options.addition);
          }
        }
        if ("separator" in options) final = final.concat(options.separator);
        else final = final.concat("+");
        final = final.concat(str);
        if (i + 1 === options.repeatTimes - 1) if ("addition" in options) final = final.concat(options.addition);
    }
  }
  return final;
};
  