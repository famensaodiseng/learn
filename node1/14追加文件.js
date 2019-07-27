const fs = require('fs')

fs.appendFile(__dirname+'/files/1.txt','\n锄禾日党务',(err)=>{
    if (err) return console.log('追加失败:'+err.message);
    console.log('追加成功了');
    
})