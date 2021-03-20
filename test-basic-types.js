// @ts-check

import {sum, minus, concatNumbers, returnPromise} from './basictypesDefinition';

export default function testBasicTypes() {
  sum(1,2,3);
  // compilation error
  sum('1',2,3);



  minus(5,4);
  // compilation error
  minus('5', '4');



  concatNumbers('3','4');
  concatNumbers(null,'4');
  // compilation error
  concatNumbers(3, '4');
  // compilation error
  concatNumbers(3, '4').then(result => {
    console.log(result);
  });



  returnPromise().then(results => {
    console.log(results.join(' '));
  })
}