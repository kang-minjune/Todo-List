import express from 'express';
import { login, logout, register } from '../controllers/auth.js';

const router = express.Router();

//로그인 기능을 찾아가는 라우터
router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);

export default router;