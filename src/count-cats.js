const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let matr = matrix.flat(Infinity);
  let catcount = 0;
  for(let i = 0; i < matr.length; i++)
  {
    if(matr[i] === "^^")
    {
      catcount++;
    }
  }
  return catcount;
};
