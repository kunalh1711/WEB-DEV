import fs from "fs/promises"

let a = await fs.readFile("kunal.txt")
let b = await fs.appendFile("kunal.txt", "\n this is amazing promises ")
console.log(a.toString(),b)
