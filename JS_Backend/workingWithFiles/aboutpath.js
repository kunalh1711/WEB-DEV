import path from "path"

let myPath = "C:/workspaces/WEB-DEV/JS_Backend/workingWithFiles/kunal.txt"
console.log(path.extname(myPath))
console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs/kunal.txt"))