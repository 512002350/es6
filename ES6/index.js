// 3. Module ： ESM 和 CommonJS 两种方式
// ESM
import moduleA, { aFn } from "./a.js";
import moduleB from "./b.js";
import { aTitle, aFn as aFunction } from "./a.js";
import { bTitle, bFn as bFunction } from "./b.js";
// 导入单个模块就直接引入
// 导入多个模块需要在花括号内写入对应的函数名，若想要把名字进行修改，需要在函数名后加入as + 新的名字
// 导入多个模块就用解构的方式

console.log(moduleA);
console.log(moduleB);
console.log(aTitle, aFunction, bTitle, bFunction);

// CommonJS
const moduleA = require("./c.js");
console.log(moduleA);
