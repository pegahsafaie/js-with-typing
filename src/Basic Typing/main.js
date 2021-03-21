// @ts-check
import {sum, isPositive, calculateFormula, multiple, resolve} from './utils';

export default function testUtil() {
  
  sum('1','2'); // You expect to get 3 but you get 12!

  // Being confused about spread operator(...), you have used the array instead of expanded arguments.
  // It will result in a runtime error
  multiple([5,4]); 

  if(isPositive(5)) {
    console.log('YOOHOO!');// You expect to see YOOHOO! but you see SHIT as 'false' is a Truthy value!
  } else {
    console.log('SHIT!');
  }

  calculateFormula(34,5,5,31); // OOPS! There are so many params you just forgot one of them

  // Somebody updates 'resolve' function and now it just support one single promise!
  // He forgot to update your code and it will create runtime error.
  resolve(
    Promise.resolve(new Date()),
    (result) => { console.log(`You order is registered at: ${result}`) }
  );
}