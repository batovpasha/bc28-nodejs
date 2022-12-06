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

module.exports = router;