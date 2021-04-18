const {Router, response} = require('express')
const Todo = require('../models/todo')
const router = Router()

router.get('/', async (request, response) => {
    try {
        const todos = await Todo.findAll()
        if(todos.length) response.status(200).json(todos)
        else response.status(200).json({})
    } catch(e) {
        response.status(500).json({
            message: 'Server error'
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const todo = await Todo.create({
            title: request.body.title,
            done: false
        })
        response.status(201).json({todo})
    } catch(e) {
        response.status(500).json({
            message: 'Server error'
        })
    }
})

router.put('/:id', async (request, response) => {
    try {
        const todo = await Todo.findByPk(+request.params.id)
        todo.done = request.body.done
        await todo.save()
        response.status(200).json({todo})
    } catch(e) {
        response.status(500).json({
            message: 'Server error'
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const todo = await Todo.findByPk(+request.params.id)
        await todo.destroy()
        response.status(204).json({})
    } catch(e) {
        response.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router
