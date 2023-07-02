const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController');

router.get('/create', userController.create); //* http://localhost:3030/api/users/create?email=123@mail.ru&nickname=Leo
// router.post('/create',);

module.exports = router;