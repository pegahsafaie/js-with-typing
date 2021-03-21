// @ts-check
export default function testCustomTypes() {

  /**
   * @typedef { import('./Animal').Animal } Animal
   */


  /**
   * @type Animal
   */
  const myAnimal = Object.create(null);
  myAnimal.name = 'Wasabi'; 

 
  /**
   * @typedef {{name: string, race: string, owner : string | null }} AnimalInfo
   * @param {Animal} animal
   * @return {AnimalInfo} animalInfo
   */
  function AnimalInfo(animal) {
    return {
      name: animal.name,
      race: animal.race,
      owner: null,
    }
  }

}