const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let str = '';
  for (let i = 0; i < members.length; i += 1) {
    if(typeof members[i] === 'string') {
      const name = members[i].trim();
      str += name.charAt(0).toUpperCase();
    }
  }
  return str.length === 0 ? false : str.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
