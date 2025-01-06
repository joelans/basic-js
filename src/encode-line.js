const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    let j = i + 1;
    let count = 1;
    while(j < str.length && str.charAt(i) === str.charAt(j)) {
      count += 1;
      j += 1;
    }
    if(count > 1) {
      result += count + str.charAt(i);
      i = j - 1;
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
