// @ts-check

/**
 * @typedef {import(./customTypes.d).Animal} Animal
 * @typedef {import(./customTypes.d).Dog} Dog
 */

export default function testCustomTypes() {

  /**
   * 
   * @type { Dog } 
   */
  const myDog = Object.create(null);
  myDog.name = 'roobi';
  // compile error
  myDog.notValisProperty = 1;
  printAnimalVoice(myDog);
  // compile error
  printAnimalVoice(2);
  // compile error
  console.log(AnimalInfo(myDog).type)
  console.log(AnimalInfo(myDog).race);
  

  /**
   * 
   * @param {Animal} animal 
   */
  function printAnimalVoice(animal) {
    // typing animal you should get auto-complete of all animal proeprties and methods
    console.log(animal.name + ' said ' + animal.sound());
  }

  /**
   * @typedef {{name: string, race: string, says() : string}} AnimalInfo
   * @param {Animal} animal
   * @return {AnimalInfo} animalInfo
   */
  function AnimalInfo(animal) {
    return {
      name: animal.name,
      race: animal.type,
      says: () => { return animal.name + ' said ' + animal.sound() }
    }
  }
}