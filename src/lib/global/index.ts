import { test } from '../../utils/index'

// 在Node.js中，定义了一个require.cache对象，该对象代表缓存了所有已被加载模块的缓存区
// console.log(require.cache);

//获取模块的绝对路径
let path = require.resolve('../../utils/index.ts')
console.log(path);



const obj = {
    name: '123',
    age: 12,
    child: {
        name: '456',
    }
}
// 打印对象的深度
console.dir(obj, { depth: 1 })


// 测试时间
// console.time('test')
// for (let i = 0; i < 1000000000; i++) {

// }
// console.timeEnd('test')

setTimeout(() => {
    console.log(123);
}, 1000)

const timer2 = setInterval(() => {
    console.log(345);
}, 5000);

setTimeout(() => {
    // 解除定时器的引用 两者都可以
    // timer2.unref()
    // clearInterval(timer2)
}, 1000 * 10);

// 打印当前文件的文件夹路径
// /Users/tianming/myGithub/node-tpl/src/lib/global
console.log(__dirname);
// 打印当前文件的绝对路径 
///Users/tianming/myGithub/node-tpl/src/lib/global/index.ts
console.log(__filename);
//打印当前文件的所在项目的绝对路径 => /Users/tianming/myGithub/node-tpl
console.log(process.cwd());