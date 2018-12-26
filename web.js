

//实现文件写入操作
var fs  =require('fs');
var msg = "hello word";

fs.writeFile('./yft.js',msg,'utf8',function(err){

    if(err) {
        console.log('写文件出错啦'+err);
    }else {
        console.log('ok');
    }
})