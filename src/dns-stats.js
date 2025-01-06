const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let i = 0; i < domains.length; i += 1) {
    const domain = domains[i].split('.').reverse();
    let tmp = '';
    for (let j = 0; j < domain.length; j += 1) {
      tmp += '.' + domain[j];
      if (result.hasOwnProperty(tmp)) {
        result[tmp] += 1;
      } else {
        result[tmp] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
