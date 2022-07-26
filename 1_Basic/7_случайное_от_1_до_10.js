/*
Функция Math.random() возвращает случайное число от 0 до 1 с большим количеством знаков после запятой. Но в реальных задачах бывает нужно получать случайные целые числа, например, в диапазоне от 0 до 10. Реализуйте код, который выводит на экран именно такое число. Для этой задачи вам понадобятся функции Math.random() и Math.round()

Попробуйте решить это задание в одну строчку
Алгоритм

Так как Math.random() возвращает числа в диапазоне от 0 до 1, то чтобы получить числа от 0 до 10, нам нужно выполнить умножение на 10. Затем получившиеся число округляется и так мы получаем то, что нужно.
*/

// @ts-check
/* eslint-disable no-console */

// BEGIN (write your solution here)
console.log(Math.round(Math.random() * 10));
// END
