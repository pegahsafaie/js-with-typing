/**
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} sum of the first and second number
 */
export function sum(a, b) {
  return a + b;
}

/**
 * @param  {...number} args enter as many as numbers you want
 * @returns {number} result of multiplication
 */
export function multiple(...args) {
  return args.reduce((acc, cur) => acc *= curr);
}

/**
 * @param {number} a number
 * @returns { 'True' | 'False'} detects if number is positive
 */
export function isPositive(a) {
  if (a > 0) {
    return 'true';
  } else {
    return 'false';
  }
}

/**
 * @param {number} a  @param {number} b @param {number} c  
 * @param {number} d  @param {number} e  @param {number} f 
 * @returns number
 */
export function calculateFormula(a,b,c,d,e,f) {
  return (a*b)+(c*(d/e)%f);
}

/** 
 * @param {Promise<date>} promise 
 * @param {function} callback 
 */
export function resolve(promise, callback) {
  promise.then(callback);
}
