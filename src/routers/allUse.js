import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';

const mainRouter = Router();

mainRouter.use('/contacts', contactsRouter);
mainRouter.use('/auth', authRouter);

export default mainRouter;
