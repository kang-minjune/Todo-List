import express from 'express';
import { listAdd, listUpdate, listGet, listDelete } from '../controllers/list';

const router = express.Router();

router.post('/list-add', listAdd);
router.post('/list-update', listUpdate);
router.post('/list-get', listGet);
router.post('/list-delete', listDelete);