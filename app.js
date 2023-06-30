require('dotenv').config();

const express = require('express');
const connectDb = require('./dbConfig');
const todoRouter = require('./routes/todo.routes');
const {DbConnection} = require('./models/connectSeq');
const app = express();


app.use(express.json());

app.use('/api/v1', todoRouter);

app.get('/health-check', (req,res) =>{
    res.status(200).send('<h3>todo api</h3>')
});

const port = process.env.PORT || 5000;

const starter = async() =>{
    try {
        await DbConnection();
        app.listen(port, () =>{
            console.log('server have started')
        })
    } catch (error) {
        console.log(error)        
    }
};

starter();