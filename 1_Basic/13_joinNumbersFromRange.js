/*
Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:

joinNumbersFromRange(1, 1); // '1'
joinNumbersFromRange(2, 3); // '23'
joinNumbersFromRange(5, 10); // '5678910'
*/


// BEGIN (write your solution here)
const joinNumbersFromRange = (start, finish) => {
    let result = '';
    let i = start;
    while (i <= finish) {
      result = `${result}${i}`;
      i += 1;
    }
    return result;
  };
  // END
  
  export default joinNumbersFromRange;