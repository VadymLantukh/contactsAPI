import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { loginUsersSchema, registerUsersSchema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUsersController,
  logoutUserController,
  refreshUsersSessionController,
  registerUsersController,
} from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUsersSchema),
  ctrlWrapper(registerUsersController),
);

authRouter.post(
  '/login',
  validateBody(loginUsersSchema),
  ctrlWrapper(loginUsersController),
);

authRouter.post('/refresh', ctrlWrapper(refreshUsersSessionController));

authRouter.post('/logout', ctrlWrapper(logoutUserController));

export default authRouter;
