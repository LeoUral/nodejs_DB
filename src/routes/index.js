const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter')


// router.use('/create',);
// router.use('/update',);
// router.use('/search',);
// router.use('/delete',);
router.use('/users', userRouter);

module.exports = router;