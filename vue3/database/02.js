const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo1', {
        useNewUrlParser: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})

//使用规则创建集合
const Course = mongoose.model('Course', courseSchema) //courses


const course = new Course({
    name: 'mongodb基础',
    author: '杨方涛',
    isPublished: true
})
//将文档插入数据库中
course.save();