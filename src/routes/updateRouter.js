const Router = require('express');
const updateController = require('../controllers/updateController');
const router = new Router()


router.post('/document', updateController.updateDocument);

module.exports = router;