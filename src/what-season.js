const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date === null || typeof date === 'string') throw Error;
  
  let array = ["spring", "summer", "autumn" , "winter"];
  if ((date.getMonth() >= 0 && date.getMonth() <= 1) || date.getMonth() == 11) return array[3];
  if ((date.getMonth() >= 2 && date.getMonth() <= 4) || date.getMonth() == 11) return array[0];
  if ((date.getMonth() >= 5 && date.getMonth() <= 7) || date.getMonth() == 11) return array[1];
  if ((date.getMonth() >= 8 && date.getMonth() <= 10) || date.getMonth() == 11) return array[2];
};
