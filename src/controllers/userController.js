const logger = require('../../logger');
const uuid = require('uuid');
const path = require('path');
const readDataUser = require('../model/users/readDataUser');
const createNewUser = require('../model/users/createNewUser');
const bcrypt = require('bcrypt');
const createNewDir = require('../model/general/createNewDir');



class UserController {

    /**
     * Создание нового пользователя
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async create(req, res, next) {
        try {
            const { nickname, email, password } = req.query
            if (!nickname || !email) throw new Error('No nickname or email')

            const salt = await bcrypt.genSalt(10);
            const pass = await bcrypt.hash(password, salt)

            const token = uuid.v4()
            const urlDB = path.join(__dirname, '..', '..', '..', '_DB')

            const urlDBFiles = path.join(urlDB, '/')
            const result = await readDataUser(`${urlDBFiles}users.json`, email, nickname, pass, token)

            const urlDir = path.join(__dirname, '..', '..', '..', '_DB', `${token}`)

            // обработка результата чтения данных пользователя
            if (typeof (result) === 'object') {
                res.json({ result: 'Такой пользователь уже есть' })

            } else if (typeof (result) === 'string') {
                const resultNewDir1 = await createNewDir(urlDir)

                res.json({ token: result })

            } else {
                await createNewUser(`${urlDBFiles}users.json`, email, nickname, pass, token)
                const resultNewDir2 = await createNewDir(urlDir)

                res.json({ token: token })
            }

        } catch (err) {
            logger.error(err, `Error, create new user`)
            res.json({ error: 'No nickname or email' })
            next()
        }
    }




}

module.exports = new UserController()

