import Router from 'express';
import {todoList, todoCreateTask, todoUpdateTask, todoDeleteTask} from '../controllers/todoController.js';

const router = Router();

// GET all todolist items
router.get('/api/list/:id', todoList);

// POST request for creating todolist item.
router.post('/api/list/:id', todoCreateTask);

// PUT request to update todolist item.
router.put('/api/list/:id', todoUpdateTask);

// DELETE request to delete todolist item.
router.delete('/api/list/:id', todoDeleteTask);

export default router;