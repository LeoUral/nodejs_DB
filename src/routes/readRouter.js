const Router = require('express');
const readController = require('../controllers/readController');
const router = new Router()



// router.post('/collection',);
router.post('/document', readController.document);

module.exports = router;