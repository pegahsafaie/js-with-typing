
// @ts-check
/**
 * @typedef {import('./declaration.d').Dog} Dog
 */

 export default function testDeclarationFile() {
   /**
   * 
   * @type { Dog } 
   */
  const myDog = Object.create(null);
  console.log(myDog.type);

 }