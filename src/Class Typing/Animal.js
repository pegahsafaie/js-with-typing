
// @ts-check
export class Animal {
  /**
   * @type string | null
   */
  name;
}

export class Dog extends Animal{
  /**
  * @private
  * @type string | null
  */
  owner;
  /**
 * @function
 */
  sound() {
    return 'hup!';
  }
}

/**
 * @type Dog
 */
const myPet = Object.create(null)