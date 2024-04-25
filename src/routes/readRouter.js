const Router = require('express');
const readController = require('../controllers/readController');
const router = new Router()



// router.post('/collection',);
router.post('/document', readController.readDocument);
router.post('/all', readController.readAllDocum);

module.exports = router;