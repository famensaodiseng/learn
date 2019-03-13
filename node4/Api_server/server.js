const express = require('express');
const app = express()

const mysql = require('mysql')
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'mysql001'
})
app.get('/',(req,res)=>{
    res.send('请求成功')
})
//对外暴露一个借口
app.get('/getallhero',(req,res)=>{
    const sql = 'select * from heros'
    conn.query(sql,(err,result)=> {
        if(err) return res.send({status:500,msg:err.message,data:null})
        res.send({status:200,msg:'ok',data:result})
    })
})




app.listen(5001,()=>{
    console.log('server running at http://127.0.0.1:5001');
    
})