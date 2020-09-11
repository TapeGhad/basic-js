const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = [];
  members.map(elem => {
    if (typeof elem === "string") {
      elem = elem.trim();
      arr.push(elem[0].toUpperCase());
    }
  });
  arr.sort();
  return arr.join("");
};
