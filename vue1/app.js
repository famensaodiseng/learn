const express =require('express');
const app =express();


app.use ('/node_modules/',express.static('./node_modules'))
app.set('view engine','ejs' );
app.set('views','./views/');


app.get('/',(req,res)=>{
    res.render('index',{})
})

app.get('/register',(req,res)=>{
    red.render('./user/register.ejs',{});
});

app.get('/login',(req,res)=>{
    red.render('./user/login.ejs',{});
})

app.post ('register',(req,res)=>{
    res.send({msg:"ok",status:200})
})


app.listen(80,()=>{
    console.log('啊哈哈哈，杨方涛');
})  