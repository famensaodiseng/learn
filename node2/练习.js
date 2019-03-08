//整理成绩.txt 到ok.txt

// 读取成绩.txt

const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname,'成绩.txt');


fs.readFile(filePath,'utf-8',(err,data)=>{
    // 转换格式
  
   let arr = data.split(' ');
//    console.log(arr);


// item是对应的值
// index是对应的下标
   let newArr = arr.filter(function(item,index,arr){
    // console.log(item,index);
    return item.length > 0;
    
   })
   let str  = '';
    // 写入文件
    // console.log(newArr);
    newArr.forEach((item,index,arr) => {
        str += item.replace('=',':')+'\n';
    });

    console.log(str);
    

    //写入到ok.txt

    fs.writeFile(path.join(__dirname,'ok.txt'),str,err=>{
        console.log('写入成功');
    })
})