const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let cats = 0;
 matrix.forEach(element => { 
   element.forEach(element_2 => { 
     if (element_2 === "^^")cats ++; 
   });
 });
  return cats
};
