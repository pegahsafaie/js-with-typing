
// @ts-check
export default function testInheritance() {

  /**
 * @typedef { import('./Animal').Dog } Dog
 */


  /**
   * @type Dog
   */
   const myAnimal = Object.create(null);
   myAnimal.owner = 'me'; 
}