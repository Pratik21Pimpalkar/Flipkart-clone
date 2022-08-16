import express from 'express'
import { signin ,login} from '../Controllers/userHandling.js';

const router=express.Router();

router.post('/signin',signin); 
router.post('/login',login); 

export default router