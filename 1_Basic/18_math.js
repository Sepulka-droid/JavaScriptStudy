/*
Программист, который работал на проекте до вас, разбросал все функции, 
связанные с математическими вычислениями по разным файлам с именами numbers1.js, numbers2.js и numbers3.js. 
Причем имена функций тоже сделал странными: все функции в файле numbers2.js заканчиваются на двойку, например, sum2().

Вы быстро поняли, что это неудобно и нужно создать единый интерфейс для доступа к ним (говорят "фасад"). Д
ля этого необходимо импортировать все функции из всех перечисленных модулей в новый модуль в файле math.js.

math.js
Задача состоит в том, чтобы файл math.js импортировал в себя все функции из трех описанных выше файлов и выставил их наружу 
(то есть сделал их реэкспорт) под следующими именами: pow, sum, sub, sqrt и multi. А так же экспортировал функцию cube() по умолчанию.
В этом задании специально не сказано, где какая функция и под каким именем лежит. 
А так же не сказано, как они все экспортируются. Цель этого задания в том, чтобы вы хорошо разобрались с системой модулей, 
что очень упростит вашу жизнь в дальнейшем. Огромная просьба не подсматривать решение и подумать самостоятельно, а в случае чего задать вопрос в комьюнити.
Не забудьте проанализировать файл с тестами, чтобы понять, как используется модуль math.js.
*/

// BEGIN
import cube from './18_numbers1';
import multi, { pow2 as pow, sum2 as sum, sub2 as sub } from './18_numbers2';
import sqrt from './18_numbers3';

export {
  cube as default, multi, pow, sum, sub, sqrt,
};
// END