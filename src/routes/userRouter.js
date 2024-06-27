const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController');

// router.get('/create', userController.createNewUser); //* http://localhost:3030/api/users/create?email=123@mail.ru&nickname=Leo
router.post('/create', userController.createNewUser); //* http://localhost:3030/api/v1/auth/users/create
router.post('/signin', userController.signIn) // вход в систему

module.exports = router;