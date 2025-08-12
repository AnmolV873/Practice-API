import express from 'express';
import { getallUser, createUser, deleteUser } from '../controllers/user.controllers.js';

const router = express.Router();

router.get('/all', getallUser);
router.post('/create', createUser)
router.delete('/remove', deleteUser);

export default router;
