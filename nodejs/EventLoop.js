/**
 *  Event loop  - отдельный  механизм который позволяет использовать неблокирующую модель ввода и вывода
 *
 *  синхронные -> микротаски -> макротаски
 *
 *  JavaScript может обрабатывать только одну задачу за раз (однопоточный)
 *  Event Loop позволяет JavaScript делать все эти вещи в асинхронном режиме, несмотря на то, что он однопоточный.
 *  Он постоянно крутится, проверяя, есть ли новые задачи в очереди выполнения и выполняя их по мере поступления.
 *
 *
 *
 *
 *  Макрозадачи - это задачи, которые выполняются в цикле событий JavaScript.
 *  Они включают в себя функции, такие как setTimeout, setInterval, setImmediate, I/O, и UI rendering
 *
 *  setImmediate - это функция, предоставляемая Node.js, которая используется для асинхронного выполнения кода
 *
 **/


/**
 *
 * Console log 1
 * Console log 2
 * Promise 3
 * queueMicrotask
 * setTimeout 2
 * Promise 1
 * setTimeout 1
 * Promise 2
 * process.nextTick
 *
 * **/
const process = require('process');

console.log('Console log 1');

setTimeout(() => {
    Promise.resolve().then(() => {
        console.log('Promise 1');
    })

    setTimeout(() => {
        Promise.resolve().then(() => {
            console.log('Promise 2');
            process.nextTick(() => {
                console.log('process.nextTick');
            });
        })
        console.log('setTimeout 1');
    }, 0);

    console.log('setTimeout 2');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 3');
})

queueMicrotask(() => {
    console.log('queueMicrotask')
})

console.log('Console log 2');