/**
 * Глобальная область видимости
 * Блочная область видимости let и const
 * Функциональная область видимости
 *
 * */

let letGlobalVariable = 'letGlobalVariable';

function func() {
    let letVariable = 'letVariable';
    var varVariable = 'varVariable';
    const constVariable = 'constVariable';

    if (true) {
        var varVariableIF = 'varVariableIF';
        let letVariableIF = 'letVariableIF';
        let constVariableIF = 'constVariable';
        console.log(letGlobalVariable)
        console.log(varVariable)
        console.log(letVariable)
        console.log(constVariable)
    }
    console.log(letGlobalVariable)
    console.log(varVariableIF)
    //console.log(letVariableIF) //ReferenceError:
    //console.log(constVariableIF) //ReferenceError:

}


func();
//console.log(letVariable) //ReferenceError
//console.log(varVariable) //ReferenceError



var a = 5;
var a = 6;
console.log(`a: ${a}`)


let b = 7;
b = 8;
//let b = 8; // SyntaxError: Identifier 'b' has already been declared
console.log(`b: ${b}`)


//const c; // SyntaxError: Missing initializer in const declaration
const c = 9;
//c = 9 //TypeError: Assignment to constant variable
console.log(`c: ${c}`)

