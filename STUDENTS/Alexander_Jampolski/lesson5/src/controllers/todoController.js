import {sendQuery} from '../db/index.js';

// Display list of todolist items.
export const todoList = async (req, res) => {
    const command = `
        SELECT id, title, done
        FROM todo;
    `;
    sendQuery(req, res, command);
}

// Create task
export const todoCreateTask = async (req, res) => {
    const {title, done} = req.body;
    const command = `
        INSERT INTO todo (title, done)
        VALUES ('${title}', ${done});
    `;
    sendQuery(req, res, command);
}

// Update task
export const todoUpdateTask = async (req, res) => {
    const {done} = req.body;
    const command = `
        UPDATE todo
        SET done = ${done}
        WHERE id = ${req.params.id}
    `;
    sendQuery(req, res, command);
}

// Delete task from todolist
export const todoDeleteTask = async (req, res) => {
    const command = `
        DELETE
        FROM todo
        WHERE id = ${req.params.id}
    `;
    sendQuery(req, res, command);
}