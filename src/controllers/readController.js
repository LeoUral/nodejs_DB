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

    async document(req, res, next) {
        try {
            const { email, password, token, collection, idDocument } = req.body

            console.log(password, token, collection, idDocument); // test

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

}

module.exports = new ReadController()

