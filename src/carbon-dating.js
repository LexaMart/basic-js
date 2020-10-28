const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if (!sampleActivity || !isNaN(sampleActivity) || typeof(sampleActivity)!= "string" || typeof(parseInt(sampleActivity)) == "number") return false;
  return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/HALF_LIFE_PERIOD);
};
