const fs = require('fs')

fs.stat(__dirname + '/file/1.txt',(err,stats)=>{
    if (err) return console.log(err.message);
    console.log(stats.size)     //字节
    console.log(stats.birthtime);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    
})
