import express from 'express';
import { 
    listAdd,
    listGet,
    listGetAll,
    listUpdate,  
    listDelete } from '../controllers/list.js'

const router = express.Router();

router.post('/create', listAdd);
router.get('/read/:id', listGet);
router.get('/allread', listGetAll);
router.put('/update/:id', listUpdate);
router.delete('/delete/:id', listDelete);

export default router;