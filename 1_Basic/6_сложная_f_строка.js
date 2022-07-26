/*
Выведите на экран первую и последнюю буквы предложения, 
записанного в константу text, в следующем формате:
First: N
Last: t

Постарайтесь создать только одну константу, 
в которую сразу запишется нужный текст перед печатью на экран. В этом уроке мы отрабатываем умение собирать составное выражение.
*/

// @ts-check
/* eslint-disable no-console */

const text = 'Never forget what you are, for surely the world will not';

// BEGIN (write your solution here)
console.log(`First: ${text[0]}\nLast: ${text[text.length - 1]}`);
// END
