import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { registerContactsSchema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUsersController } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerContactsSchema),
  ctrlWrapper(registerUsersController),
);

export default authRouter;
