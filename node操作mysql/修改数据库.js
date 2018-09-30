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

const name =  {name:'如来佛',age:'88',gender:'女'}
const sqlStr3 = 'update name set ? where id=?'


conn.query (sqlStr3,[name,2],(err,result)=>{
    if (err) return console.log('修改数据失败'+err.message)
       console.log(result);
})


// app.listen(3001,()=> {
//     console.log('Express sever running at http://127.0.0.1:3001');
// })
