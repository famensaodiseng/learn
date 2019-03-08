const fs = require('fs')

fs.copyFile(__dirname + '/file/1.txt',__dirname + '/file/1-copy.txt',(err)=> {
    if (err) return console.log('拷贝失败'+err.message)

    console.log('拷贝成功')
})