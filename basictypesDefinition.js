/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @return {number} restult of minus
 */
export function minus(a,b) {
  return a - b;
}

/**
 * 
 * @param  {...number} args 
 * @return {number} restult of sum
 */
export function sum(...args) {
  return args.reduce((result, val) => { result += value }, result = 0);
}

/**
 * 
 * @param {null | string} a 
 * @param {null | string} b 
 * @return {string} restult of concat
 */
export function concatNumbers(a, b) {
  if(typeof a && b === 'string') {
    return `${a}${b}`;
  } else {
    return 'null';
  }
}

/**
 * 
 * @returns {promise<string[]>} 
 */
export function returnPromise() {
  const promise1 = Promise.resolve('hellp');
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'typing');
  });
  return Promise.all([promise1, promise2]);
}
