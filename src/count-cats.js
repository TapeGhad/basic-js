const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cat = "^^", count = 0;
  matrix.map(arr => {
    arr.map(elem =>{
      if (elem === cat) count ++;
    });
  });
  return count;
};
