const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('试试汉子')
})


app.listen(3000,()=>{
    console.log('http server running at http://127.0.0.1:3000');
    
})