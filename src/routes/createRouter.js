const Router = require('express')
const router = new Router()
const createController = require('../controllers/createController')


router.post('/collection', createController.collection);
router.post('/document',);

module.exports = router;