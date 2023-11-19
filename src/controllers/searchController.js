const logger = require('../../logger');
const path = require('path');
const bcrypt = require('bcrypt');
const createNewDir = require('../model/general/createNewDir');
const readData = require('../model/general/readData');
const checkUser = require('../model/general/checkUser');
const createFileData = require('../model/general/createFileData');
const readDir = require('../model/general/readDir');
const accessDir = require('../model/general/accessDir');


class SearchController {

    /**
     * Поиск указанной позиции в документах
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async searchPosition(req, res, next) {
        try {
            // todo: Сделать поиск в документах указанной позиции

        } catch (err) {
            logger.error(err, `Error, position not found`)
            res.json({ error: 'Position not found' })
            next()
        }
    }

}

module.exports = new SearchController();