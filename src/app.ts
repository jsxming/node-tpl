import * as fs from 'fs';
import 'tsconfig-paths/register'
import {test} from '@/utils/index'
console.log(__dirname);
console.log(__filename);
const data = fs.readFileSync('./package.json')
test()
console.log(31);
console.log(data.toString());