import { chmodSync, exists, fchmodSync, futimesSync, link, linkSync, mkdirSync, readdirSync, renameSync, rmdir, Stats, statSync, unlink, unlinkSync, unwatchFile, watch, watchFile } from "fs";
import { stat, utimes } from "fs/promises";
import path from "path";

/** 
 * 目录 操作相关的方法
 */

// 创建目录
// mkdirSync(path.join(__dirname, './test'))

// 删除目录
// rmdir

// 读取目录 返回一个当前文件夹下的所有文件和文件夹的数组
const files = readdirSync(__dirname)
console.log(files);

files.forEach(item => {
    let name = path.join(__dirname, item)
    const stats = statSync(name)
    //判断是文件还是文件夹
    if (stats.isFile()) {
        console.log(item, '是文件');
    } else if (stats.isDirectory()) {
        console.log(item, '是文件夹');
    }
    //判断文件是否存在
    stat(name).then((result) => {
        if (result.isFile()) {
            console.log('文件存在');
        } else if (result.isDirectory()) {
            console.log('目录存在');
        }
    }).catch((err) => {

    });
})

//修改文件访问时间及修改时间
utimes(path.join(__dirname, './demo.txt'), new Date(), new Date()).then((res) => {
    console.log(res);
}).catch((err) => {

});

//使用文件描述符对象 修改文件访问时间及修改时间
// futimesSync(1, new Date(), new Date())

// 更改文件权限
chmodSync(path.join(__dirname, './demo.txt'), '0777')
// 使用文件描述符对象 更改文件权限
// fchmodSync(1, '0666')

// rename方法移动文件或目录，
// 当移动后的路径与原路径为同一路径，而移动后的文件名或目录名与原文件名或目录名不同时，则执行文件或目录的重命名操作
// renameSync()

// 创建硬链接
// link()
// linkSync

// 删除硬链接
// unlink()
// unlinkSync

const watchFunc = (curr: Stats, prev: Stats) => {
    if (prev.ctime.getTime() == 0)
        console.log('message.txt文件被创建。');
    else if (curr.ctime.getTime() == 0)
        console.log('message.txt文件被删除。');
    else if (prev.mtime.getTime() != curr.mtime.getTime())
        console.log('message.txt文件内容被修改。');
}
// 监控文件
watchFile('./demo.txt', { interval: 60 * 60 * 1000 }, watchFunc);
unwatchFile('./demo.txt', watchFunc)

//监控文件或目录
// const watcher =  watch()
//取消监控
// watcher.close()