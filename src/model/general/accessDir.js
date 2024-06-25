const fs = require('fs/promises');
const logger = require('../../../logger');

/**
 * Проверяем доступ к диретории или файлу
 * @param {String} path 
 * @returns {Boolean} true - директория, файл существует / false - директори, файла нет
 */
module.exports = async (path) => {
    try {
        const result = await fs.access(path)
        console.log(`Директория существует`); // еуые
        return true

    } catch (err) {
        console.log(`Директории нет`);
        return false
    }

}