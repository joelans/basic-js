const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const hs = new Set();
  const arr = [];
  for (let i = 0; i < names.length; i += 1) {
    if(!hs.has(names[i])) {
      hs.add(names[i]);
      arr.push(names[i]);
    } else {
      let k = 1;
      let tmp = `${names[i]}(${k})`;
      while(hs.has(tmp)) {
        k += 1;
        tmp = `${names[i]}(${k})`;
      }
      hs.add(tmp);
      arr.push(tmp);
    }
  }
  return arr;
}

module.exports = {
  renameFiles
};
