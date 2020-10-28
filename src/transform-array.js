const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr instanceof Array) throw new Error("Error");
  let goal = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      i += 1;
    }
    else if (arr[i] === "--discard-prev") {
      if (goal.length === 0 || arr[i - 2] === "--discard-next") continue
      goal.pop();

    }
    else if (arr[i] === "--double-next") {
      if (i >= arr.length - 1) continue
      goal.push(arr[i + 1]);

    }
    else if (arr[i] === "--double-prev") {
      if (i === 0 || arr[i - 2] === "--discard-next") continue
      goal.push(arr[i - 1]);

    }
    else {
      goal.push(arr[i]);
    }
  }
  return goal;
};
