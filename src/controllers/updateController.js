const logger = require('../../logger');
const path = require('path');
const bcrypt = require('bcrypt');
const createNewDir = require('../model/general/createNewDir');
const readData = require('../model/general/readData');
const checkUser = require('../model/general/checkUser');
const createFileData = require('../model/general/createFileData');
const readDir = require('../model/general/readDir');
const accessDir = require('../model/general/accessDir');
const checkResult = require('../model/general/checkResult');


class UpdateController {

    /**
     * Обновление одной позиции в документе, по ключу.
     * При отсутсвии дописывает новое значение
     * @param {*} req - { email, password, token, collection, idDocument, key, data } = req.body
     * @param {*} res 
     * @param {*} next 
     */
    async updateDocument(req, res, next) {
        try {
            // *: Обновление указанных данных в указанном документе по ключу
            const { email, password, token, collection, idDocument, key, data } = req.body

            // check user
            const urlDB = path.join(__dirname, '..', '..', '..', '_DB')
            const result = await checkResult(email, password, token, urlDB)

            if (!result) throw new Error('Error, The data is not correct!')

            const urlFile = path.join(`${urlDB}`, `${token}`, `${collection}`, `${idDocument}.json`)
            const resultRead = await readData(urlFile)
            const docum = JSON.parse(resultRead)

            Object.assign(docum, { [key]: data })

            const urlCollection = path.join(`${urlDB}`, `${token}`, `${collection}`)
            const urlNewFile = path.join(`${urlCollection}`, `${idDocument}.json`)
            const resultCreate = await createFileData(urlNewFile, JSON.stringify(docum))

            res.json({ result: `update document: ${idDocument}` })

        } catch (err) {
            logger.error(err, `Error, not updating of document`)
            res.json({ error: 'Not updating of document' })
            next()
        }
    }


}

module.exports = new UpdateController()