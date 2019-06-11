import { Router } from 'express';
const router = Router();
import { users, quizzes } from './methods';

router.get("/user/:id", users.get);
router.post("/user", users.create);

router.get("/spotify/:id", users.getBySpotifyId);

router.get('/quiz/:userId', quizzes.get);
router.post('/quiz', quizzes.create);
router.delete('/quiz/:id', quizzes.delete)

export default router;