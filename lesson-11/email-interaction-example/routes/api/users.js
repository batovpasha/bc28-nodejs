const express = require('express');

const middlewares = require('../../middlewares');
const schemas = require('../../schemas');
const controllers = require('../../controllers/users');
const controllerWrapper = require('../../helpers/controllerWrapper');

const router = express.Router();

router.post('/register', 
  middlewares.validateBody(schemas.user.registerUserSchema),
  controllerWrapper(controllers.registerUser)
);

router.post('/login', 
  middlewares.validateBody(schemas.user.loginUserSchema),
  controllerWrapper(controllers.loginUser)
);

router.get('/current',
  middlewares.authenticate,
  controllerWrapper(controllers.getCurrentUser)
);

router.get('/logout',
  middlewares.authenticate,
  controllerWrapper(controllers.logoutUser)
);

router.patch('/avatars', 
  middlewares.authenticate, 
  middlewares.upload.single('avatar'), 
  controllerWrapper(controllers.updateAvatar)
);

router.get('/verify/:verificationToken', controllerWrapper(controllers.verify));

router.post('/verify', 
  middlewares.validateBody(schemas.user.resendVerificationEmail),
  controllerWrapper(controllers.resendVerificationEmail)
);

module.exports = router;