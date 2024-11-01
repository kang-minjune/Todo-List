import express from 'express';
import { 
    userGet,
    userUpdate,
    userDelete
} from '../controllers/user.js';

const router = express.Router();


router.get('/read/:id', userGet);
router.put('/update/:id', userUpdate);
router.delete('/delete/:id', userDelete);

export default router;