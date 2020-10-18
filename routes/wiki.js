const express = require('express');
const router = express.Router();

// routes

router.get('/', (req,res)=> {
    console.log('asd');
    res.render('../views/about.hbs');
});

router.get('/person', (req,res)=>{
    res.send('Other link for wiki');
});

module.exports = router;