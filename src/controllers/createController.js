const logger = require('../../logger');
const path = require('path');
const createNewDir = require('../model/general/createNewDir');
const readData = require('../model/general/readData');
const checkUser = require('../model/general/checkUser');
const createFileData = require('../model/general/createFileData');
const accessDir = require('../model/general/accessDir');



class CreateController {


    /**
     * Создание новой коллекции пользователя
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async collection(req, res, next) {
        try {
            const { email, password, token, collection } = req.body
            const urlDB = path.join(__dirname, '..', '..', '..', '_DB')

            if (!email || !password || !token || !collection) throw new Error('No password or email or token or collection')
            //todo: сделать проверку collection на '/ * . , ? " ' ` + = $ % & ^ : ; # ! ~ ( ) [] {} | / < > ' и пробел
            //todo: сделать все буквы прописными

            const dataUsers = JSON.parse(await readData(`${urlDB}/users.json`))
            const result = await checkUser(email, password, token, dataUsers);

            if (!result) throw new Error('Error, The data is not correct!')

            const urlCollection = path.join(`${urlDB}`, `${token}`, `${collection}`)
            const resultCreateCollection = await createNewDir(urlCollection);

            if (!resultCreateCollection) throw new Error('Error! This collection already exists.')

            res.json({ collection: resultCreateCollection })

        } catch (err) {
            logger.error(err, `Error, create new collection`)
            res.json({ error: 'Not create new collection' })
            next()
        }
    }

    /**
     * Создание нового документа (перезаписывает текущий)
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async document(req, res, next) {
        try {
            const { email, password, token, collection, idDocument, data } = req.body

            // check user
            const urlDB = path.join(__dirname, '..', '..', '..', '_DB')
            const dataUsers = JSON.parse(await readData(`${urlDB}/users.json`))
            const result = await checkUser(email, password, token, dataUsers);
            if (!result) throw new Error('Error, The data is not correct!')


            const urlCollection = path.join(`${urlDB}`, `${token}`, `${collection}`)

            const resultReadDir = await accessDir(urlCollection) // проверяем доступ к диретории

            if (!resultReadDir) {
                await createNewDir(urlCollection) // создаем, если нет указаной директории
            }

            const urlNewFile = path.join(`${urlCollection}`, `${idDocument}.json`)

            const resultCreate = await createFileData(urlNewFile, JSON.stringify(data))
            console.log(`RESULT create new document:::: `, resultCreate);

            res.json({ result: `create new document: ${idDocument}` })

        } catch (err) {
            logger.error(err, 'Error, create new document')
            res.json({ error: 'Not create new document' })
            next()
        }
    }




}

module.exports = new CreateController()

