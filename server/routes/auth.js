import { Router } from "express";
import { register, login, getMe } from '../controllers/auth.js'
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router()

// Reguster
// http://localhost:3002/api/auth/register
router.post('/register', register)

// Login 
// http://localhost:3002/api/auth/login
router.post('/login', login)

// Get Me
// http://localhost:3002/api/auth/me
router.post('/me', checkAuth, getMe)

export default router 