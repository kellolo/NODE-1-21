import express from 'express';
import authRouter from './routes/auth.js';

const PORT = process.env.PORT ?? 5000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(authRouter);

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
