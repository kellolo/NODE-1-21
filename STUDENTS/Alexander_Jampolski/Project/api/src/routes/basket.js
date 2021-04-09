import Router from 'express';
import {basketList, basketCreateItem, basketUpdateItem, basketDeleteItem} from '../controllers/basketController.js';

const router = Router();

// GET all basket items
router.get('/basket', basketList);

// POST request for creating basket item.
router.post('/basket', basketCreateItem);

// GET request to update basket item.
router.put('/basket/:id', basketUpdateItem);

// DELETE request to delete basket item.
router.delete('/basket/:id', basketDeleteItem);

export default router;