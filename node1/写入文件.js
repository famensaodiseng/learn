//向file文件写入一个2.txt文档


// 导入fs 模块
const fs = require('fs');


// 调用
fs.writeFile( './file/2.txt' ,'2222',(err)=>{
    if (err) return console.log('写入文件失败'+err.message);
    console.log('文件写入成功');
    
})