const fs = require('fs/promises')
const logger = require('../../../logger')

/**
 * Создает новый файл с данными по указанному пути
 * @param {*} pathFile 
 * @param {*} data 
 */
module.exports = async (pathFile, data) => {
    try {
        await fs.writeFile(String(pathFile), data)
        return { result: 'create new file' }

    } catch (err) {
        console.log(`Ошибка обновления или созадния файла: `, err);
        logger.error(err, 'Error, creating or updating data in file');
        return { result: 'ERROR, not create new file' }
    }

}