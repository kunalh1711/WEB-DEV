const fs = require("fs")

console.log("starting");

// fs.writeFileSync("kunal.txt" ,"kunal  is very a good boy")
fs.writeFile("kunal2.txt" , "kunal is a good boy" , ()=>{
    console.log("done");
    fs.readFile("kunal2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("kunal2.txt", " harryrobo", (e, d)=>{
    console.log(d)
})
console.log("ending");
