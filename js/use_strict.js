/** Строгий режим
 * Нельзя использовать необъявленные переменные:
 * Нельзя удалить переменные, функции или аргументы функций
 * Нельзя дублировать параметры функции
 * Нельзя использовать некоторые зарезервированные слова
 * Нельзя использовать директиву
 *
 * */

/*function sum (a,a){
    return arguments[0] + a;
}

console.log(sum(1,2))*/

"use strict"

foo = "Hello, World!"; // ReferenceError: foo is not defined
console.log(foo);



var x = 3.14;
delete x; // Ошибка: Нельзя удалить переменную


hello();

function hello(){
    return 'Hello';
}

function x(p1, p1) {}; // Ошибка: Дублирование параметра p1


var let = 10;


function x(a = 1) {
    "use strict"; // Ошибка: "use strict" не разрешено в функциях с нестандартными параметрами
}