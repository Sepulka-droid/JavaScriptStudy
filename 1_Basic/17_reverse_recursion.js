/*
Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.
Например:
import reverse from './reverse';

reverse('str');    // rts
reverse('hexlet'); // telxeh

Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод slice().

Подсказки
Чтобы узнать длину строки, используйте свойство length:
'welcome'.length; // 7

Чтобы получить подстроку из строки, используйте метод slice():
'welcome'.slice(1, 4); // 'elc';
*/

// @ts-check
// BEGIN (write your solution here)
const reverse = (text) => {
    if (text.length === 0) {
      return '';
    }
    const len = text.length - 1;
    return `${text[len]}${reverse(text.slice(0, len))}`;
  };
  
  export default reverse;
  // END
  