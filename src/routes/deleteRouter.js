const Router = require('express');
const deleteController = require('../controllers/deleteController');
const router = new Router()


router.post('/document', deleteController.deleteDocument); // удаление документа
router.post('/collection', deleteController.deleteCollection) // удаление коллекции с проверкой на отсутсвие в ней документов

module.exports = router;