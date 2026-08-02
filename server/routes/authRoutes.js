import express from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';

const router = express.Router();

router.post(
  '/register',
  validate(['username', 'email', 'password']),
  register
);
router.post('/login', validate(['email', 'password']), login);
router.get('/me', protect, getMe);

export default router;