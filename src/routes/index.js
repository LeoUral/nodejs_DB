const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter')
const createRouter = require('./createRouter');
const readRouter = require('./readRouter.js');


router.use('/create', createRouter);
router.use('/read', readRouter);
// router.use('/update',);
// router.use('/search',);
// router.use('/delete',);
router.use('/users', userRouter);

module.exports = router;