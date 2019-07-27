const fs = require('fs');

fs.readFile(__dirname+'/files/1.txt','utf-8',(err,dataStr)=>{
    if(err) return console.log('读取文件失败：'+err.message);
    console.log(dataStr);
    
})