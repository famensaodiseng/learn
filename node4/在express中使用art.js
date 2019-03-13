const express = require('express')
const app = express()



app.engine('html',require('express-art-template'))


app.set('view engine','html')

app.set('views','./art_page')

app.get('/',(req,res)=>{
    res.render('index.html',{name:'zs',age:'lis'})
})

app.listen(3000,()=>{
    console.log("server running at http://127.0.0.1:3000");
    
})