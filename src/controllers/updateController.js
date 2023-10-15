const logger = require('../../logger');
const path = require('path');
const bcrypt = require('bcrypt');
const createNewDir = require('../model/general/createNewDir');
const readData = require('../model/general/readData');
const checkUser = require('../model/general/checkUser');
const createFileData = require('../model/general/createFileData');
const readDir = require('../model/general/readDir');
const accessDir = require('../model/general/accessDir');


class UpdateController {

    async document(req, res, next) {
        try {
            // todo: Обновление указанных данных в указанном документе
        } catch (err) {
            logger.error(err, `Error, not updating of document`)
            res.json({ error: 'Not updating of document' })
            next()
        }
    }


}

module.exports = new UpdateController()