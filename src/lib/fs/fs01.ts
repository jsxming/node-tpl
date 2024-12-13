import { appendFileSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
const filename = path.join(__dirname, './demo.txt')
const data = readFileSync(filename)
console.log(data.toString())

writeFileSync(filename, '\n hello world line 3', {
    //flag默认是w，表示覆盖，a+表示追加
    flag: 'a+'
})

writeFileSync(filename, new Buffer('hello world line 4'), {
    flag: 'a+'
})

// 追加文件内容
appendFileSync(filename, '\n hello world line 5')