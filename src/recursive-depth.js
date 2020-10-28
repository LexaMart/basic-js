const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  maxDepth = 1;
  calculateDepth( arr ) {
   while(arr.some((element) => element instanceof Array)){
    this.maxDepth ++
    arr.flat()
   }
      return this.maxDepth
  }
};