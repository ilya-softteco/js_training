/**
 *  nextTick() -   добавляется в очередь микрозадач,
 *  но он будет выполнен перед любыми другими микрозадачами, включая промисы.
 *
 *  Это способ заставить JS-движок обрабатывать функцию асинхронно (после текущей функции),
 *но как можно скорее, а не ставить ее в очередь.
 *
 * */

//Log 1
// Log 2
// nextTick 1
// nextTick 2
// queueMicrotask 1
// Promise 1
// setTimeout 1
const process = require('process');


queueMicrotask(() => {
    console.log('queueMicrotask 1')
})


process.nextTick(() => {
    console.log('nextTick 1');
});


console.log('Log 1');

Promise.resolve().then(() => {
    console.log('Promise 1');
})

process.nextTick(() => {
    console.log('nextTick 2');
});

setTimeout(() => {
    console.log('setTimeout 1');
}, 0);


console.log('Log 2');
