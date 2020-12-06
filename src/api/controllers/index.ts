import registerController from './auth/registerController';
import loginController from './auth/loginController';
import refreshTokenController from './auth/refreshTokenController';
import logoutController from './auth/logoutController';

import updateUserController from './user/updateUserController';
import getUserController from './user/getUserController';

const auth = {
  registerController,
  loginController,
  refreshTokenController,
  logoutController,
};

const user = {
  updateUserController,
  getUserController,
};

export { auth, user };
