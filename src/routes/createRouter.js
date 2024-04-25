const Router = require('express')
const router = new Router()
const createController = require('../controllers/createController')


router.post('/collection', createController.createCollection); // создание новой коллекции пользователя
router.post('/document', createController.createDocument); // создание, перезапись текущего документа

module.exports = router;