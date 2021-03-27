import Router from 'express';
import {catalogList} from '../controllers/catalogController.js';

const router = Router();

// GET catalog list
router.get('/catalog', catalogList);

export default router;