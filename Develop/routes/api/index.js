const router = require('express').Router();
const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const loginRoutes = require('./login-routes');
const itemRoutes = require('./item-routes');
const findItemRoutes = require('./find-item-routes');

router.use('/user', userRoutes);
router.use('/login', loginRoutes)
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/items', itemRoutes);
router.use('/find-item', findItemRoutes);

module.exports = router;
