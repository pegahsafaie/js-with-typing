
 export default function Animal() {

 /**
 * Animal type definition
 * @typedef {Object} Animal
 * @property {string} name
 * @property {null | string} race
 */

 /**
 * Dog type extends Animal
 * @typedef {{owner: null | string, race: string, says() : string}} DogInfo
 * @typedef {Animal & DogInfo} Dog
 */

 /**
  * @type Dog
  */
 const myPet;
 }