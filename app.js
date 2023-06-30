require('dotenv').config();

const express = require('express');
const connectDb = require('./dbConfig');
const db = require('./models/index.model');
const app = express();


app.use(express.json());



app.get('/health-check', (req,res) =>{
    res.status(200).send('<h3>todo api</h3>')
})


// const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


const port = process.env.PORT || 5000;

const starter = async() =>{
    try {
        // await connectDb;
        app.listen(port, () =>{
            console.log('server have started')
        })
    } catch (error) {
        console.log(error)        
    }
};

starter();