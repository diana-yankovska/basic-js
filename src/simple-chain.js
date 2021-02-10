const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value !== undefined) {
      this.chain.push(String(value));
    }

    return this;
  },

  removeLink(position) {
    if (isNaN(position) || position !== Math.trunc(position) || position <= 0 || position > this.chain.length) {
      this.chain.length = 0;
      throw new Error("Invalid position");
    }
    
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = "( " + this.chain.join(" )~~( ") + " )";
    this.chain.length = 0;
    return result;
  }
};

module.exports = chainMaker;
