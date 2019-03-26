
const path  = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
    //这个配置文件，其实就是一个js文件，通过node中的模块操作，向外暴露另一个文件。
module.exports = {
    // mode:"development"
    entry:path.join(__dirname,'./src/main.js') ,                 //入口，表示要使用webpack打包那个文件
    output:{
        path:path.join(__dirname,'./dist'), //输出的目录
        filename:'bundle.js'  //指定出书文件的名称
    },
    devServer:{
        open :true,
        port:3000,
        contentBase:"src",
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            //创建一个在内存中生成html的页面
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'   //指定生成页面的名称
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss/,use:['style-loader','css-loader','sass-loader']},
             {test:/\.(png|jpg|gif|bmp|jpeg|webp)/,use:'url-loader?limit=200000'},
        ]
    }
}