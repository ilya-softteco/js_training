const _null = null;
const _undefined = undefined;

console.log(!!null) // false
console.log(!!undefined) // false

console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

console.log(null == undefined) // true
console.log(null === undefined) // false

const person1 = {
    firstName: 'Ilya',
    middleName: null,
    lastName: 'Martinkevich',
}

const person2 = {
    firstName: 'Anton',
    middleName: 'Gret',
    lastName: 'Lom',
}

const person3 = {
    firstName: 'Vova',
    lastName: 'Tres',
}