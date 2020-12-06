import registerValidate from './validators/auth/registerValidate';
import loginValidate from './validators/auth/loginValidate';
import refreshTokenValidate from './validators/auth/refreshTokenValidate';
import privateHeaderValidate from './validators/privateHeaderValidate';
import updateUserValidate from './validators/user/updateUserValidate';
import getUserValidate from './validators/user/getUserValidate';

const validators = {
  registerValidate,
  loginValidate,
  refreshTokenValidate,
  privateHeaderValidate,
  updateUserValidate,
  getUserValidate,
};

export { validators };
