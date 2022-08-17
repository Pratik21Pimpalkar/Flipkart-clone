import express from 'express'
import { signin ,login} from '../Controllers/userHandling.js';
import {getProductByID, getProducts} from '../Controllers/productsHandling.js'

const router=express.Router();

router.post('/signin',signin); 
router.post('/login',login); 
router.get('/products',getProducts)
router.get('/product/:id',getProductByID)
export default router