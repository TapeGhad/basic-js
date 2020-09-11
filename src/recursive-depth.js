const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  goDeeper(array) {
    let curr = 1, max = 1;
    array.map(arr => {
      curr = 1;
      if (Array.isArray(arr)) {
        curr += this.goDeeper(arr)
      }
      if (max < curr) max = curr;
    });
    return max;
  }
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    return this.goDeeper(arr);
  }
};