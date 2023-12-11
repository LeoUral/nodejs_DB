const fs = require('fs/promises')
const logger = require('../../../logger')

/**
 * Читает данные из файла, not JSON
 * @param {String} pathUserData  - URL к файлу
 * @returns 
 */
module.exports = async (pathUserData) => {
    try {
        const result = await fs.readFile(pathUserData)

        return result
    } catch (err) {
        console.log(`Ошибка чтения файла или файл отсутствует: `, err);
        return null

    }

}

