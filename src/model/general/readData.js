const fs = require('fs/promises')
const logger = require('../../../logger')

/**
 * Читает данные из файла, not JSON
 * @param {*} pathUserData 
 * @returns 
 */
module.exports = async (pathUserData) => {
    try {
        const result = await fs.readFile(pathUserData)

        return result
    } catch (err) {
        console.log(`Ошибка чтения файла в fs.readFile: `, err);
        return null

    }

}

