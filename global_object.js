/**
 *  Глобальный объект - это объект, который всегда существует в глобальной области видимости
 *  global, process, url
 *
 *
 * */

const dashes = () => console.log('-------------');

/*console.log(global)


global.setTimeout(() =>{
    console.log('Hello')
},1000);*/

global.console.log(__dirname);
console.log(process.env);
console.log(process.argv);