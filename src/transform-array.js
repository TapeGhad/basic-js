const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw "Error";
  let finalArr = [], currArr = arr, dontChangeArr = arr, except = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
  dontChangeArr.map((elem, index) => {
    if (!except.includes(elem)) finalArr.push(elem);
    else {
      if (elem === "--discard-next") {
        if (index + 1 === dontChangeArr.length) null;
        else {
          currArr.splice(index + 1, 1);
        }
      }
      if (elem === "--discard-prev") {
        if (finalArr.length === 0) null;
        else {
          if (except.includes(currArr[index-1])) null;
          else finalArr.pop();
        }
      }
      if (elem === "--double-next") {
        if (index + 1 === dontChangeArr.length) null;
        else {
          finalArr.push(currArr[index+1]);
        }
      }
      if (elem === "--double-prev") {
        if (finalArr.length === 0) null;
        else {
          if (except.includes(currArr[index-1])) null;
          else {
            if (finalArr[finalArr.length - 1] === finalArr[finalArr.length - 2] && finalArr[finalArr.length - 1] === currArr[index-1]) finalArr.push(currArr[index-1]);
            else {
              finalArr.push(currArr[index-1]);
              finalArr.push(currArr[index-1]);
            }
          } 
          
        }
      }
    }
  });
  return finalArr;
};
