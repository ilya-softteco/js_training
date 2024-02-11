/**
 *  подъем переменной или функции в глобальную или функциональную области видимости
 *  поднимаются только функциональные выражения и переменные, объявленные с помощью ключевого слова «var».
 *  Обычные функции и стрелочные функции, а также переменные, объявленные с помощью ключевых слов «let» и «const» не поднимаются.
 *
 *
 *
 *
 *
 * */

const dashes = () =>   console.log('-------------');



hello()

function hello() {
    console.log('Hello')
}


//helloArrow(); //TypeError: helloArrow is not a function
var helloArrow = () => console.log('Hello Arrow')
helloArrow();

dashes()

//console.log(a)  // ReferenceError: Cannot access 'a' before initialization
//a = 5 // ReferenceError: Cannot access 'a' before initialization
let  a;
a = 5;
console.log(`a: ${a}`)

dashes()

console.log(`b: ${b}`)
b = 5
console.log(`b: ${b}`)
var  b