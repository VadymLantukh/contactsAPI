import { registerUser } from '../services/auth.js';

export const registerUsersController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfuly registered a user!',
    data: user,
  });
};
