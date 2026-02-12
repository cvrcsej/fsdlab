const os = require('os');
const path = require('path');
const utils = require('util');
const events = require('events');

console.log('Os Platform:', os.platform());
console.log('Os FreeMem:', os.freemem());
console.log('Os Totalmem:', os.totalmem());

console.log(path.basename('hello.txt'));
console.log(path.dirname('12feb.js'))

console.log(utils.format("WELCOME", 'CSE'));

console.log(utils.diff('12345', '12!!5'))

const EventEmitter = events.EventEmitter;
const emit = new EventEmitter();

emit.on('hello', () => {
    console.log('hello');
})
emit.emit('hello');