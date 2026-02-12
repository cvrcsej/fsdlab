import { add, div } from "./12feb.js";

console.log(add(2, 3))
console.log(div(2, 3))

import add1 from "./12feb1.js";

console.log(add1(2, 7));

import { add2, mul2 } from './12feb2.js';

console.log(add2(3, 6));
console.log(mul2(2, 6));

const { add3 } = require('./12feb3.js')

console.log(add3(3, 4))
console.log(mul3(4, 5)) 