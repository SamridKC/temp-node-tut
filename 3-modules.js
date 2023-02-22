//  CommonJS, every file is module (by default)
//  Modules - Encapsulated Code (only share minimum)

// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alt-flavor')
require('./7-mind-grenade')
console.log(names)

sayHi('Sam')
sayHi(names.john)
sayHi(names.peter)

console.log(data)