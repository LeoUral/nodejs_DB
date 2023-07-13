const logger = require('../../../logger');
const createFileData = require('../general/createFileData');
const createNewDir = require('../general/createNewDir');
const readData = require('../general/readData')
const bcrypt = require('bcrypt')
const path = require('path')



/**
 * Добавляем новго пользователя
 * @param {*} filePath 
 * @param {*} email 
 * @param {*} nickname 
 * @param {*} token 
 */
module.exports = async (filePath, email, nickname, password, token) => {
    try {
        const obj = {
            "email": email,
            "nickname": nickname,
            "token": token,
            "password": password
        }
        const allUsers = await JSON.parse(await readData(filePath))
        allUsers.push(obj)

        await createFileData(filePath, JSON.stringify(allUsers))

    } catch (err) {
        console.log(`Ошибка при добавлении нового пользователя`);
        logger.error(err, 'Error, add new user')
    }
}