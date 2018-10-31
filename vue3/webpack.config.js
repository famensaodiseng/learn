const path = require('path')
module.exports = {
    mode :'development',
    entry:"./src/sound.js",
    output:{
        path:path.join(__dirname,'./dist'),
        filename:"bundle.js"
    }
}