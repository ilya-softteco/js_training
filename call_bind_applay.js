/**
 * Методы call, bind и apply в JavaScript используются для управления контекстом this в функциях.
 *
 *
 * */
const dashes = () => {
    console.log('-------------')
}
const obj = {
    name: 'Ilya',
    lastName: 'Martinkevich',
    _call(middleName) {
        console.log(`Hello, ${this.name}  ${middleName} ${this.lastName}`);
    }
}

function _call() {
    console.log(`Hello, ${this.name}`);
}

_call.call({name: 'Anton'});
obj._call('Gres')
obj._call.call({name: 'Pete'}, 'Gres')
dashes()

