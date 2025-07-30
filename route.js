import express from 'express';
import { userlogin, usersignup } from './controller.js';

const router=express.Router();

//router-level middleware handling
router.get('/login',userlogin)
router.get('/signup',usersignup)

export default router;
