import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';

import { UsersCollection } from '../db/User.js';

export const registerUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });
  if (user) throw createHttpError(409, 'Email in user');

  const encrypdetPassword = await bcrypt.hash(payload.password, 10);

  return await UsersCollection.create({
    ...payload,
    password: encrypdetPassword,
  });
};
