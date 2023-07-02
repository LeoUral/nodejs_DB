const logger = require('../../../logger');
const createFileData = require('../general/createFileData');
const readData = require('../general/readData')


/**
 * Добавляем новго пользователя
 * @param {*} filePath 
 * @param {*} email 
 * @param {*} nickname 
 * @param {*} token 
 */
module.exports = async (filePath, email, nickname, token) => {
    try {
        const obj = {
            "email": email,
            "nickname": nickname,
            "token": token
        }
        const allUsers = await JSON.parse(await readData(filePath))
        allUsers.push(obj)
        console.log(`FILE PATH:::: `, filePath); // test

        await createFileData(filePath, JSON.stringify(allUsers))
    } catch (err) {
        console.log(`Ошибка при добавлении нового пользователя`);
        logger.error(err, 'Error, add new user')
    }
}