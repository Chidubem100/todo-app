const dbConfig = require("../dbConfig");

const {Sequelize} = require("sequelize");
const Todos = require('./todo.model');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    },
    // logging: (...msg) => console.log(msg)
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Todos = require('./todo.model')(sequelize,Sequelize)

async function DbConnection(){
    try {
        await sequelize.authenticate();
        await sequelize.sync({})
        console.log('Connection to DB successfully')
    } catch (error) {
        console.error(error)
    }
}
module.exports = { db,sequelize, DbConnection};

