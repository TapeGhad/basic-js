const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || parseInt(sampleActivity, 10) >= 15 || parseInt(sampleActivity, 10) <= 0 || sampleActivity.search(/[a-z]/i) != -1) return false;
  let sample = 0;
  if (sampleActivity.search(/./) != -1) sample = parseFloat(sampleActivity);
  else sample = parseInt(sampleActivity, 10);
  return Math.ceil((Math.log(MODERN_ACTIVITY/sample)*HALF_LIFE_PERIOD)/0.693);
};
