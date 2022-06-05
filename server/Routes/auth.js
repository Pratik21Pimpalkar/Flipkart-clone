import express from 'express'
import { signin } from '../Controllers/userHandling.js';

const router=express.Router();

router.post('/signin',signin);

export default router