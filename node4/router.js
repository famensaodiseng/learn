const express = require('express')

const router = express.Router()

aoo.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname })
})

module.exports = router