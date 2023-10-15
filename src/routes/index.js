const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter')
const createRouter = require('./createRouter');
const readRouter = require('./readRouter.js');
const deleteRouter = require('./deleteRouter')
const updateRouter = require('./updateRouter')
const searchRouter = require('./searchRouter');


router.use('/create', createRouter); // создание нового документа, новой коллекции
router.use('/read', readRouter);  // чтение документа из коллекции по ID
router.use('/update', updateRouter); // изменения данных в существующем документе
router.use('/search', searchRouter); // поиск документа по параметрам не связанным с ID документа
router.use('/delete', deleteRouter); // удаление выбранного документа
router.use('/users', userRouter); // API для взаимодействия с пользователями

module.exports = router;