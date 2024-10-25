import { THIRTY_DAYS } from '../constants/users.js';
import { loginUser, registerUser } from '../services/auth.js';

export const registerUsersController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfuly registered a user!',
    data: user,
  });
};

export const loginUsersController = async (req, res) => {
  const session = await loginUser(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + THIRTY_DAYS),
  });

  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + THIRTY_DAYS),
  });

  res.status(200).json({
    status: 200,
    message: 'Seccessfuly logged in an user',
    data: {
      accessToken: session.accessToken,
    },
  });
};
