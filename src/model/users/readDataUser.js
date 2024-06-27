const createFileData = require('../general/createFileData');
const readData = require('../general/readData');
const logger = require('../../../logger');
const accessDir = require('../general/accessDir');




/**
 * Читает данные указанного пользователя, если нет файла, то создает
 * @param {*} pathUserData 
 * @param {*} email 
 * @param {*} nickname 
 * @param {*} token 
 */
module.exports = async (pathUserData, email, nickname, password, token) => {
    try {
        console.log(`read DATA PATH:::: `, pathUserData); // test

        const resultAccess = await accessDir(pathUserData)

        let result;
        if (resultAccess) {
            result = await JSON.parse(await readData(pathUserData))
        } else {
            await createFileData(pathUserData, JSON.stringify([{ email: email, nickname: nickname, password: password, token: token }]))
            return String(token)
        }

        const user = result?.find(item => item.email === email)

        if (user) {
            return user
        } else {
            return false
        }

    } catch (err) {
        console.log(`Файл не обнаружен: `, err);
        logger.error(err, 'File not found')
    }

}