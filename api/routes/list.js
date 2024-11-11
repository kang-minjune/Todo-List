import express from 'express';
import { 
    listAdd,
    listGet,
    listUpdate,  
    listDelete } from '../controllers/list.js'

const router = express.Router();

router.post('/create', listAdd);
router.get('/read/:id', listGet);
router.put('/update/:id', listUpdate);
router.delete('/delete/:id', listDelete);

// router.get('/allread', listGetAll);
export default router;