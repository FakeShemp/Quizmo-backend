import { Router } from 'express';
const router = Router();
import { users } from './methods';

router.get("/users/:id", users.get);
router.post("/users", users.post)

export default router;