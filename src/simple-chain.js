const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (this.arr.length < position || position < 0 || typeof position !== "number") { this.arr = []; throw Error; }
    else this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    for (let i = 0; i < this.getLength(); ++i) {
      str += `( ${this.arr[i]} )`;
      if(i < this.getLength() - 1) {
        str += '~~';
      }
    }
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;
