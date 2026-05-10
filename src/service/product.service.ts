import path from "node:path";
import fs, { Utf8Stream } from "fs"

const filePath = path.join(process.cwd(),"./src/database/db.json");
export const readProduct = ()=>{
    // console.log(filePath);
    const products = fs.readFileSync(filePath,"utf-8");
    // console.log(products);
    return JSON.parse(products);
}