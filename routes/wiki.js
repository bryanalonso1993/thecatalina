const express = require('express');
const router = express.Router();

// routes

router.get('/', (req,res)=>{
    console.log('asd');
    res.render('../views/about.hbs');
});

router.get('/person', (req,res)=>{
    res.send('Other link for wiki');
});

router.get('/about', (req,res)=>{
    res.send('Catalina llorona');
});

router.post('/authentication', (req, res) => {
    console.log(req.body);
    res.send('Sussessfull Authentication');
});

module.exports = router;