const fs = require('fs/promises');
const logger = require('../../../logger');

/**
 * Создаем новую директорию по указанному пути
 * @param {*} pathDir 
 * @returns 
 */
module.exports = async (pathDir) => {
    try {
        const result = await fs.mkdir(pathDir, { recursive: true })

        console.log(`CRAETED DIR:::: `, result); // test

        return result
    } catch (err) {
        console.log(`Ошибка созадния директории: `, err);
        logger.error(err, `Error, created dir`)

        return null
    }

}