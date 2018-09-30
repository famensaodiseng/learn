const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'mysql001'
})


// conn.query('select * from name', (err, result) => {
//     if (err) return console.log(err.message)
//     console.log(result);
// })

const name =  {name:'haha子',age:'12',gender:'男'}
// const nama =  {name:'笑颜',age:'13',gender:'男'}
const sqlStr2 = 'insert into name set ?'

conn.query (sqlStr2,name,(err,result)=>{
    if (err) return console.log(err.message)
       console.log(result);    
})


// app.listen(3001,()=> {
//     console.log('Express sever running at http://127.0.0.1:3001');
// })
