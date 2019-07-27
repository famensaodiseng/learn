const fs = require('fs')


fs.readFile(__dirname+'/成绩.txt',"utf-8",(err,data)=>{
    if (err) return console.log('读取错误'+err.message);
    // console.log(data);
    
    let arr = data.split(" ");
    // console.log(arr);
    let newArr = []
    arr.forEach(item => {
        if (item.length >0){
            let newSore = item.replace("=",":")
            newArr.push(newSore);
        }
    })
    console.log(newArr);
    
    fs.writeFile(__dirname+'/files/6.txt',newArr.join("\n"),(err)=>{
        if (err) return console.log("写入错误："+err.message);
        console.log('写入成功');
        
        
    })
})