import express from 'express';
import path from 'path';
import todoRouter from './routes/todo.js';

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3300;
const server = express();

server.use('/', express.static(path.resolve(__dirname, 'public')));

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(todoRouter);

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});