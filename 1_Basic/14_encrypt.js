/*
Сэмвелл обнаружил, что его сообщения перехватываются в замке «Близнецы» и там читаются. Из-за этого их атаки перестали быть внезапными. Немного подумав, он разработал программу, которая бы шифровала сообщения по следующему алгоритму. Она бы брала текст и переставляла в нем каждые два подряд идущих символа.
encrypt('move');   // 'omev'
encrypt('attack'); // 'taatkc'

// Если число символов нечётное,
// то последний символ остаётся на своём месте
encrypt('go!'); // 'og!'

Реализуйте функцию encrypt(), которая принимает на вход исходное сообщение и возвращает зашифрованное.
Подумайте. Может ли эта функция расшифровать зашифрованное сообщение?
*/

// BEGIN (write your solution here)
const encrypt = (line) => {
    let result = '';
    for (let i = 0; i < line.length; i += 2) {
      if (i + 1 < line.length) {
        result += `${line[i + 1]}${line[i]}`;
      } else {
        result += `${line[i]}`;
      }
    }
    return result;
  };
  
  // console.log(encrypt('move'), encrypt('attack'), encrypt('go!'));
  // END
  
  export default encrypt;