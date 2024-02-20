/**
 * https://learn.javascript.ru/arrow-functions-basics
 * https://learn.javascript.ru/arrow-functions
 * 1. У стрелочных функций нет «this»
 * 2. Стрелочные функции Не имеют arguments.
 * 3. Стрелочные не могут быть вызваны с new.
 *
 *
 * **/


const dashes = () => {
    console.log('-------------')
}

const group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showStudentsArrow() {

        this.students.forEach(
            (student) => {
                console.log(this.title + ': ' + student)
            }
        );
    },

    showStudents() {
        this.students.forEach(
            function (student) {
                console.log(this.title + ': ' + student) // this.title =undefined:
            });
    }
};

group.showStudentsArrow();
dashes();
group.showStudents();
dashes();


function argumentsArrow(n) {
    const f = (b) => arguments[0] + n;
    const b = 5;
    return f(b);
}

console.log(argumentsArrow(3)); // 6
dashes();


const person = {
    name: "Ernane Ferreira",
    sayMyName: function () {
        console.log(`My name is ${this.name}.`)
    },
    sayMyNameArrow: () => console.log(`My name is ${this.name}.`),
};

person.sayMyName();
person.sayMyNameArrow(); // => My name is undefined.
dashes();

