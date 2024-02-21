/**
 * Объект process в Node.js представляет информацию о текущем процессе Node.js и предоставляет контроль над ним.
 * Это глобальный объект и является экземпляром класса EventEmitter
 *
 *
 *  Объект process также генерирует ряд событий, которые можно использовать
 *  для отслеживания изменений в процессе или реагирования на эти изменения
 * */
const process = require('process')

console.log(process.pid)
console.log(process.platform)
console.log(process.memoryUsage())


process.on('exit', (code) => {
    console.log('Процесс завершился с кодом: ', code);
});