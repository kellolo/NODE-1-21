import express from 'express';
import catalogRouter from './routes/catalog.js';
import basketRouter from './routes/basket.js';

const server = express();
const PORT = process.env.PORT ?? 3300;

server.use(express.json());
server.use(catalogRouter);
server.use(basketRouter);

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
