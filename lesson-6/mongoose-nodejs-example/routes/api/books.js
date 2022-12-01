const express = require('express');

const controllers = require('../../controllers/books');
const middlewares = require('../../middlewares');
const schemas = require('../../schemas');
const controllerWrapper = require('../../helpers/controllerWrapper');

const router = express.Router();

router.get('/', controllerWrapper(controllers.getAll));

router.get('/:id', controllerWrapper(controllers.getById));

router.post('/',
  middlewares.validateBody(schemas.book.addBooksSchema), 
  controllerWrapper(controllers.add)
);

router.put('/:id', 
  middlewares.validateBody(schemas.book.addBooksSchema), 
  controllerWrapper(controllers.updateById)
);

router.patch('/:id/favorite', 
  middlewares.validateBody(schemas.book.updateFavoriteByIdSchema),
  controllerWrapper(controllers.updateFavoriteById)
);

router.delete('/:id', controllerWrapper(controllers.removeById));


module.exports = router;