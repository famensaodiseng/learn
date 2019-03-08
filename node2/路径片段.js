 const path = require('path')

//  result = path.join('c:/','a','/d','/wq','../q')
 
//  console.log(result);
const fs = require('fs')
fs.readFile(path.join (__dirname ,'./file/1.txt'),'utf-8',(err,data)=>{
    if (err) return console.log(err.message);
    console.log(data);
    

})

