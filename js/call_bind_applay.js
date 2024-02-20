/**
 * Методы call, bind и apply в JavaScript используются для управления контекстом this в функциях.
 * Call: Метод call вызывает функцию с заданным значением this и аргументами, перечисленными по одному
 * Apply: Метод apply вызывает функцию с заданным значением this и позволяет передавать аргументы в виде массива
 * Bind: Метод bind возвращает новую функцию, позволяя передать в неё this и любое количество аргументов
 * Важно отметить, что call и apply немедленно выполняют функцию, в то время как bind создаёт новую функцию, которую можно вызвать позже
 *          (параматры передаются как в call)
 *
 *
 * */
const dashes = () => {
    console.log('-------------')
}

const obj = {
    name: 'Ilya',
    lastName: 'Martinkevich',

    displayInfoUser(middleName, age) {
        console.log(`Hello, ${this.name}  ${middleName} ${this.lastName}, Age: ${age}`);
    },

}

function displayInfoUser(middleName, age) {
    console.log(`Hello, ${this.name}  ${middleName} ${this.lastName}, Age: ${age}`);
}


displayInfoUser.call({name: 'Anton', lastName: 'Martinkevich'} , 'Gres' , 55);
displayInfoUser.apply({name: 'Anton', lastName: 'Martinkevich'} , ['Gres' , 55]);
const displayInfoUserBind = displayInfoUser.bind({name: 'Anton', lastName: 'Martinkevich'} , 'Gres' , 55);
displayInfoUserBind();

dashes();

obj.displayInfoUser.call({name: 'Anton', lastName: 'Martinkevich'} , 'Gres' , 55);
obj.displayInfoUser.apply({name: 'Anton', lastName: 'Martinkevich'} , ['Gres' , 55]);
const displayInfoUserBindObj = obj.displayInfoUser.bind({name: 'Anton', lastName: 'Martinkevich'} , 'Gres' , 55);
displayInfoUserBindObj();
