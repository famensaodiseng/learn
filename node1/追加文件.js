const fs = require('fs');


fs.appendFile('./file/2.txt','3333',(err)=>{
    if(err) return console.log('追加错误'+err.message); 
    console.log('文件追加成功');
})