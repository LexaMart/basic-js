const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members))return false;
  let gg = [];
  members.forEach(element => {
    if(typeof(element) == "string"){
      gg.push(element.trim()[0].toUpperCase());
    }
  });
  return gg.sort().join("");
};
