import { Router } from 'express';
const router = Router();
import { users } from './methods.js';

router.get("/user/:id", users.get);

export default router;