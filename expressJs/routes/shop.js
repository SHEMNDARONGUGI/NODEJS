const path = require('path');

const rootDir = require('../util/path')

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
// slash represents root folder in OS hence page not rendered we use the path module 
// join constructs path by concatenating the different segments
// __is a global variable made available by nodeJS

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // ....
});

module.exports = router;