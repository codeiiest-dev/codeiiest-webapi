import { Router } from 'express';

// Controllers
import { user } from '../controllers';

// Middlewares
import { validators } from '../middlewares';

const router = Router();

router.get('/get', validators.getUserValidate, user.getUserController);
router.use(validators.privateHeaderValidate);
router.post(
  '/update',
  validators.updateUserValidate,
  user.updateUserController,
);

export default router;
