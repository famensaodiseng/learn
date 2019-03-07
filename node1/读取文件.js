const fs = require('fs');

fs.readFile('./file/1.txt','utf-8',function(err,data){
    console.log(err);
    console.log(data);
})