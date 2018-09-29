const express = require('express');

const app = express();

app.set('view engine','ejs');

app.set('views','./ejs_pages');
app.get('/', (req, res) => {
    res.render('index.ejs',{age:30,name:'杨方涛',xl:'小学'});
})



app.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000')
})