/*
 * @Descripttion: 
 * @version: 
 * @Author: yang_ft
 * @Date: 2019-11-26 18:14:48
 * @github: famensaodiseng
 * @LastEditTime: 2019-11-26 19:28:02
 */

'use strict';

const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /.js$/,
            use: 'babel-loader'
        }, {
            test: /.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
}