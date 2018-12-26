var fs = require('fs');

fs.readFile('./yft.js',function(err,data){
    if(err){
        throw err;
    }
    console.log(data.toString('utf-8'));
});