const mysql = require('mysql2');

let connectDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chidubem',
    database: 'todoapp',
});

connectDb.connect(function(err){
    if(err){
        return console.error(err.message)
    }
    console.log('Connected to Mysql server')
});

module.exports = connectDb;