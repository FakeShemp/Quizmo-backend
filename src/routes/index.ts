import { Router } from 'express';
const router = Router();
import { users } from './methods';

router.get("/user/:id", users.getUser);
router.get('/quiz', users.getQuiz);
router.post('/quiz', users.createQuiz);

export default router;