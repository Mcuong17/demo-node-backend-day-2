const { readFile, writeFile } = require("node:fs/promises");
const path = require("node:path");
const DB_FILE = path.join(__dirname, "..", "db", "todo.json");

//__dirname: chỉ ra đường dẫn tại file chạy lệnh
console.log(DB_FILE)
const readDB = async () => {

    try {
        const result = await readFile(DB_FILE,'utf8')
        return JSON.parse(result)
    } catch (error) {
        if(error.code == 'ENOENT') {
            await writeDB({})
            return {}
        }
    }
    
}

 const writeDB = async (data) => {
    await writeFile(DB_FILE, JSON.stringify(data, null, 2), 'utf-8')
}


module.exports = { readDB, writeDB}

