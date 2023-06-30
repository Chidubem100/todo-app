
module.exports = {
    HOST: process.env.Host,
    USER: process.env.User,  
    PASSWORD: process.env.Password,
    DB: process.env.Database,
    dialect: "mysql",
    pool: {
      max: 5,
      min:0,
      acquire: 30000,
      idle: 10000
    }
};






// const mysql = require('mysql2');

// let connectDb = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'todoapp',
// });

// connectDb.connect(function(err){
//     if(err){
//         return console.error(`Error message: ${err.message}`)
//     }
//     console.log('Connected to Mysql server')
// });
// // connectDb.destroy()
// // connectDb.end(function(err){
// //     if(err){
// //         return console.error(`Error message: ${err.message}`)
// //     }
// //     console.log(`Close the database`)
// // })

// module.exports = connectDb;


