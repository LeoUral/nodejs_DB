const logger = require('../../logger');
const path = require('path');
const bcrypt = require('bcrypt');
const createNewDir = require('../model/general/createNewDir');
const readData = require('../model/general/readData');
const checkUser = require('../model/general/checkUser');
const createFileData = require('../model/general/createFileData');
const readDir = require('../model/general/readDir');
const accessDir = require('../model/general/accessDir');



class ReadController {


    /**
     * Чтение документа из DB 
     * @param {*} req (body: email, password, token, collection, idDocument)
     * @param {*} res 
     * @param {*} next 
     */
    async document(req, res, next) {
        try {
            const { email, password, token, collection, idDocument } = req.body

            console.log(email, password, token, collection, idDocument); // test

            // check user
            const urlDB = path.join(__dirname, '..', '..', '..', '_DB')
            const dataUsers = JSON.parse(await readData(`${urlDB}/users.json`))
            const result = await checkUser(email, password, token, dataUsers);
            if (!result) throw new Error('Error, The data is not correct!')

            const urlFile = path.join(`${urlDB}`, `${token}`, `${collection}`, `${idDocument}.json`)

            const resultRead = await readData(urlFile)

            console.log(`JSON parse:::: `, JSON.parse(resultRead)); // test

            res.json(JSON.parse(resultRead))

        } catch (err) {
            logger.error(err, `Error, not read document`)
            res.json({ error: 'Not read document' })
            next()
        }
    }

    /**
     * Получение данных всех документов в указанной коллекции
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async allDocum(req, res, next) {
        try {
            const { email, password, token, collection } = req.body
            console.log(`POST API DATA::: `, password, token, collection); // test

            // check user
            const urlDB = path.join(__dirname, '..', '..', '..', '_DB')
            const dataUsers = JSON.parse(await readData(`${urlDB}/users.json`))
            const result = await checkUser(email, password, token, dataUsers);
            if (!result) throw new Error('Error, The data is not correct!')

            const urlFile = path.join(`${urlDB}`, `${token}`, `${collection}`)
            const resultAllData = await readDir(urlFile)

            const promiseData = resultAllData.map((itm) => {
                return (async () => {
                    try {
                        const urlFiles = path.join(`${urlDB}`, `${token}`, `${collection}`)
                        const resultRead = await readData(`${urlFiles}/${itm}`)
                        return JSON.parse(resultRead) // JSON.parse
                    } catch (err) {
                        console.log(`Errror, read of dir: `, err);
                        return null
                    }
                })()
            })
            const allResult = await Promise.all(promiseData)

            console.log(`result read dir::::::: `, (allResult)); // test 
            res.json((allResult))

        } catch (err) {
            logger.error(err, `Error, not read all documents from collection`)
            res.json({ error: 'Not read all documents from collection' })
            next()
        }
    }

}

module.exports = new ReadController()

