const logger = require('../../../logger');
const createFileData = require('../general/createFileData');
const readData = require('../general/readData')
const bcrypt = require('bcrypt')


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
        console.log(`FILE PATH:::: `, filePath); // test

        await createFileData(filePath, JSON.stringify(allUsers))

        // todo: создать для нового пользователя, его директорию - home/token/

    } catch (err) {
        console.log(`Ошибка при добавлении нового пользователя`);
        logger.error(err, 'Error, add new user')
    }
}