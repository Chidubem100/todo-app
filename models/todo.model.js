const {DataTypes} = require('sequelize');

const TD = (sequelize) =>{
    const Todos = sequelize.define('Todos', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true
        },
        title: {
            type: DataTypes.STRING,

        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: DataTypes.DATEONLY
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false 
        }
    },{freezeTableName:true, timestamps:true});
    return Todos;
}
     
(async () =>{
    await sequelize.sync({});
}, (err,result) =>{
    if(err){console.log(err)
    }else{
        // console.log(result)
    }
})

module.exports = TD;