/*
Данные, вводимые пользователями, часто содержат лишние пробельные символы в конце или начале строки. Обычно их вырезают с помощью метода .trim(), например, было: ' hello\n ', стало: 'hello'.

Обновите переменную firstName записав в неё то же самое значение, но обработанное методом .trim(). Распечатайте то, что получилось, на экран.
*/

// @ts-check
/* eslint-disable no-console */

let firstName = '  Grigor   \n';

// BEGIN (write your solution here)
firstName = firstName.trim();
console.log(firstName);
// END
