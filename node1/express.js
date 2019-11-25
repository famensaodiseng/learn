/*
 * @Descripttion: 
 * @version: 
 * @Author: yang_ft
 * @Date: 2019-11-21 13:00:51
 * @github: famensaodiseng
 * @LastEditTime: 2019-11-21 13:10:08
 */
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('hello world')
});

// 这是yft页面
app.get('/yft', function (req, res) {
    res.send('这是yft页面')
});
app.listen(3000)