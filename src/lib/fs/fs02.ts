import { readFileSync, writeFileSync } from "fs";
import path, { join } from "path";

/** 
 * 复制文件 base64
 */
function copyFile(filepath: string, targetPath: string) {
    try {
        const data = readFileSync(filepath, {
            encoding: 'base64'
        })
        writeFileSync(targetPath, data.toString(), {
            encoding: 'base64'
        })
    } catch (error) {
        console.log("🚀 ~ file: fs02.ts:13 ~ copyFile ~ error:", error)
    }
}

copyFile(
    path.join(process.cwd(), '/src/static/img/cat.jpg'),
    path.join(process.cwd(), '/src/static/img/cat2.jpg')
)