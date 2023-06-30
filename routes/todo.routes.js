const express = require('express');
const router = express.Router();
const {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    findOneTodo
} = require('../conrollers/todo.controller');


router.get('/todos', getAllTodo);
router.post('/create-todo', createTodo);
router.patch('/update-todo/:id', updateTodo);
router.delete('/delete-todo/:id', deleteTodo);
router.get('/:id', findOneTodo);

module.exports = router;