//导入文件

const fs = require('fs')
fs.writeFile("./files/2.txt","我是一只小鸟",(err)=>{
    if(err) return console.log('写入文件失败:'+err.message);
    console.log("写入文件成功");
    
})