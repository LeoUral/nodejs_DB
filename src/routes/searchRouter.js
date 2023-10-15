const Router = require('express');
const searchController = require('../controllers/searchController');
const router = new Router()


router.post('/position', searchController.searchPosition);

module.exports = router;