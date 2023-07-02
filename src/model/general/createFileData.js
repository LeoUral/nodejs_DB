const fs = require('fs/promises')
const logger = require('../../../logger')

/**
 * Создает новый файл с данными
 * @param {*} pathFile 
 * @param {*} data 
 */
module.exports = async (pathFile, data) => {
    try {
        await fs.writeFile(String(pathFile), data)

    } catch (err) {
        console.log(`Ошибка обновления или созадния файла: `, err);
        logger.error(err, 'Error, creating or updating data in file');
    }

}