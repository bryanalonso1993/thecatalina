const express = require('express');
const router = express.Router();
const connection = require('../server/database');

router.get('/', (req,res)=> {
    res.render('../views/links/logueo_auth.hbs');
    //res.send('Main de autenticacion');
});

router.post('/',(req,res)=> {
    let username = req.body.USERNAME;
    let password = req.body.PASSWORD;
    let sql_query = `SELECT username, password from users where username='${username}' and password='${password}' `;
    connection.query(sql_query, (err, results)=> {
        if (err) throw err;
        if (results.length > 0){
            res.render('../views/links/index.hbs');
        }else{
            console.log('El usuario no existe');
            res.send('Incorrect Login Username and password')
        }
    });
    connection.end();
    //    console.log(`El usuario de authenticacion es : ${req.body.USERNAME} y el password de auth ${req.body.PASSWORD}`);
});

router.get('/sucess', (req,res)=> {
    res.send('Mensaje recibido y funcionando');
});

module.exports = router;