const mysql =require('mysql');

const conn = mysql.createConnection ({
    host:"localhost",
    user:'root',
    password:'root',
    database:'mysql001'
})


conn.query('select * from name',(err,result)=>{
    if(err) return console.log(err.message)
    console.log(result);
})

