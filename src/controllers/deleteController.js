const logger = require('../../logger');
const path = require('path');
const bcrypt = require('bcrypt');
const createNewDir = require('../model/general/createNewDir');
const readData = require('../model/general/readData');
const checkUser = require('../model/general/checkUser');
const createFileData = require('../model/general/createFileData');
const readDir = require('../model/general/readDir');
const accessDir = require('../model/general/accessDir');



class DeleteController {

    /**
     * Удаление документа в указанной коллекции
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async document(req, res, next) {
        try {
            // todo: Удаление документа в указанной коллекции
            console.log(`Deleting of document`); // test
        } catch (err) {
            logger.error(err, `Error, not deleting of document`)
            res.json({ error: 'Not deleting of document' })
            next()
        }
    }

    /**
     * Удаление коллекции
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async collection(req, res, next) {
        try {
            // todo: Удаление коллекции (перед удаление проверить на отстутсвие в ней документов)
            console.log(`Deleting of collection`); // test
        } catch (err) {
            logger.error(err, `Error, not deleting of collection`)
            res.json({ error: 'Not deleting of ciollection' })
            next()
        }
    }

}

module.exports = new DeleteController()