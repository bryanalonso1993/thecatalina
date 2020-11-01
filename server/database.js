const mysql = require('mysql');
const paramAuth = require('./keys');
let connection = mysql.createConnection(paramAuth);

connection.connect( (err)=> {
    if (err){
        console.error('error connection',err.stack);
        return;
    }
    //console.log('connected as id ' + connection.threadId);
    return connection;
});
// connection.query('SELECT * FROM enlaces limit 2', (err,rows, fields)=> {
//     if (err) throw err;
//     console.log('The solution is',rows[0]);
// });

//connection.end();

module.exports = connection;