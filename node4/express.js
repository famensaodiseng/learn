const express = require('express')

const bodyParser = require('body-parser')
const app = express()

app.use()
// app.get('/user',(req,res)=>{
//     console.log(req.query);

//     res.send('ok')
// })

// app.get('user/:id/:name',(req,res)=>{
//     res.send('ok')
//     console.log(req.parmas);
    
// })

app.post ('/user',(req,res)=>{
    console.log(req.body);
    
    res.send('ok')
})


app.listen(3001,()=>{
    console.log('server running at http://127.0.0.1:3000');
    
})