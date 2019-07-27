const fs = require('fs')
fs.readFile("./files/1.txt",function(err,data){
    console.log(err);
    console.log(data);
    
    console.log(data+"");
    
})