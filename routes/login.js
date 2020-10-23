const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (req,res)=> {
    res.render('../views/links/logueo_auth.hbs');
    //res.send('Main de autenticacion');
});

router.post('/', (req,res)=> {
    console.log(req.params);
});

router.get('/sucess', (req,res)=> {
    res.send('Mensaje recibido y funcionando');
});

module.exports = router;