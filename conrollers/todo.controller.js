const asyncWrapper = require('../middlewares/asyncMiddleware');
const {op} = require('sequelize');
const {db} = require('../models/connectSeq');
const Todo = db.Todos;

const createTodo = asyncWrapper(async(req,res) =>{
    const {description} = req.body;

    if(!description){
        return res.status(400).json({msg:'Please provide a description'})
    }
    const todo = await Todo.create(req.body);
    return res.status(201).json({data:todo})
});


const getAllTodo = asyncWrapper(async(req,res) =>{
    const todo = await Todo.findAll();
    if(todo.length <1){
        return res.status(200).json({msg:'There is no todos currently'})
    }

    return res.status(200).json({count: todo.length,data: todo})
    
});

const findOneTodo = asyncWrapper(async(req,res) =>{
    const {id:todoId} = req.params;

    const todo = await Todo.findByPk(todoId);

    if(!todo){
        return res.status(400).json({msg: 'No todo with such id'})
    }
    return res.status(200).json({data:todo})
})

const updateTodo = asyncWrapper(async(req,res) =>{
    const {id:todoId} = req.params;
    const todo = await Todo.update(req.body, {where: {id:todoId}}).then(num => {
        if(num ==1){
            return res.status(200).json({msg: 'To-do have been successfully updated'})
        }else{
            return res.status(400).json({msg: 'Cannot update to-do with this id'})
        }
    })

    if(!todo){
        return res.status(400).json({msg: 'No todo with such id'})
    }
    // return res.status(200).json({msg:'to-do have been updated successfully'})
});

const deleteTodo = asyncWrapper(async(req,res) =>{
    const {id:todoId} = req.params;
    const todo = await Todo.destroy({where: {id:todoId}}).then(num => {
        if(num ==1){
            return res.status(200).json({msg: 'To-do have been successfully deleted'})
        }else{
            return res.status(400).json({msg: 'Cannot update to-do with this id'})
        }
    })

    if(!todo){
        return res.status(400).json({msg: 'No todo with such id'})
    }
})

module.exports = {
    getAllTodo,
    createTodo,
    findOneTodo,
    updateTodo,
    deleteTodo
}