const Router = require('express');
const deleteController = require('../controllers/deleteController');
const router = new Router()


router.post('/document', deleteController.document);
router.post('/collection', deleteController.collection)

module.exports = router;