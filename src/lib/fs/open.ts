import path from "path";
import { closeSync, open, openSync, readSync } from "fs";

/** open方法打开一个文件，返回一个文件描述符
 * 这个描述符可以传递给 read、write 等方法使用。
 * 例如：
 * fs.write(fd, buffer, 0, buffer.length, null, (err, bytesWritten) => { });
 */
const fileStat = openSync(path.join(__dirname, 'demo.txt'), 'r')
var buf = Buffer.alloc(1024)
/** 
 * 使用5个参数，其中fd参数值必须为open方法所使用的回调函数中返回的文件描述符或openSync方法返回的文件描述符；
 * buffer参数值为一个Buffer对象，用于指定将文件数据读取到哪个缓存区中；
 * offset参数值、length参数值与position参数值均为一个整数，
 * 其中offset参数用于指定向缓存区中写入数据时的开始写入位置（以字节为单位）​，
 * length参数用于指定从文件中读取的字节数，
 * position参数用于指定读取文件时的开始位置（以字节为单位）​。
 */
// const bytesRead = readSync(fileStat, buf, 0, 11, null)
// console.log(bytesRead);
// console.log(buf.slice(0, bytesRead).toString());
let bytesRead
let data = ''
while ((bytesRead = readSync(fileStat, buf, 0, buf.length, null)) !== 0) {
    data += buf.toString('utf-8', 0, bytesRead)
}
console.log(data);
// 关闭文件
closeSync(fileStat)