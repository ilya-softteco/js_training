/**
* Метод process.nextTick() в Node.js используется для отложенного выполнения функции до следующей итерации цикла событий (Event Loop)
* Передавая функцию методу process.nextTick(), мы сообщаем системе о том, что эту функцию нужно вызвать после завершения
* текущей итерации цикла событий, до начала следующей. Использование данного метода выглядит так:
* */

const process = require('process');




function log (msg = 'Hello world') {
    process.nextTick(() => {
        console.log('nextTick IN Function');
    });
    console.log(msg)
}

// Откладываем выполнение функции до следующей итерации цикла событий
process.nextTick(() => {
    console.log('Выполняется в следующей итерации');
});

log();
console.log('Выполняется в текущей итерации');