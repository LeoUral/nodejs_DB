const logger = require('../../logger');
const uuid = require('uuid');
const path = require('path');
const readDataUser = require('../model/users/readDataUser');
const createNewUser = require('../model/users/createNewUser');


class UserController {

    /**
     * Создание нового пользователя
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async create(req, res, next) {
        try {
            const { nickname, email } = req.query
            if (!nickname || !email) throw new Error('No nickname or email')

            const token = uuid.v4()
            const urlDB = path.join(__dirname, '..', '..', '..', '_DB')
            console.log(`EMAIL: ${email}, nickname: ${nickname}, TOKEN: ${token}`); // test

            const urlDBFiles = path.join(urlDB, '/')
            const result = await readDataUser(`${urlDBFiles}users.json`, email, nickname, token)

            console.log(`RESULT SEARCH USER: `, result); // test

            if (typeof (result) === 'object') {
                res.json({ result: 'Такой пользователь уже есть' })

            } else if (typeof (result) === 'string') {
                res.json({ token: result })

            } else {
                await createNewUser(`${urlDBFiles}users.json`, email, nickname, token)
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

