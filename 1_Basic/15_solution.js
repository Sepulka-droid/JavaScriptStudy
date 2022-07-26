/*
В файле myMathModule.js:
Создайте функцию getTriangleArea(), которая принимает два аргумента h и b 
и вычисляет площадь треугольника по формуле A = 1/2 * h * b, где h — высота, а b — основание треугольника.
getTriangleArea(5, 10) === 25;
getTriangleArea(15, 12) === 90;
Экспортируйте функцию.

solution.js
В файле solution.js:
Импортируйте функцию getTriangleArea() из модуля myMathModule.
Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. Используйте функцию square() (принимает число и возвращает его квадрат).
Экспортируйте созданную функцию по умолчанию.
*/

// @ts-check

import square from './15_square.js';
import { getTriangleArea } from './15_myMathModule.js';

// BEGIN (write your solution here)
export default (n) => getTriangleArea(n, square(n) / 2);
// END
