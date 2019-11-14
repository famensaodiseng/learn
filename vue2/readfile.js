const fs = require('fs');
const path = require('path');
// console.log(fs);

// console.log(__dirname);

fs.readFile(path.join(__dirname, 'index.css'), 'utf8', (err, doc) => {

    console.log(doc);
})