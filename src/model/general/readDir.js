const fs = require('fs/promises');
const logger = require('../../../logger');


/**
 * Читаем директорию, массив файлов
 * @param {*} path 
 */
module.exports = async (path) => {
    try {

        const result = await fs.readdir(path)

        console.log(`RESULT READ DIR:::: `, result); // test

        return result

    } catch (err) {
        console.log(`Ошибка при чтении директории`);
        logger.error(err, 'Error, read directory')
        return null
    }
}