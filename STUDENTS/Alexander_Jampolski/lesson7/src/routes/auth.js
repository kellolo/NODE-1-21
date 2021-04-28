import Router from 'express';
import {login, checkLogin} from '../controllers/authController.js';

const router = Router();

router.post('/api/user', login);
router.get('/api/user', checkLogin);

export default router;