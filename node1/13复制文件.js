const fs = require("fs")

fs.readFile('./files/2.txt',"UTF-8",(err,data)=>{
    if(err) return console.log('读取文件失败'+err.message);
    console.log(data);
    
    fs.writeFile('./files/333.txt',data,(err)=>{
        if (err) return console.log('写入文件失败'+err.message);
        
        console.log("恭喜，复制成功");
        
    })
})