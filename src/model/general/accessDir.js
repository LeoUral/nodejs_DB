const fs = require('fs/promises');
const logger = require('../../../logger');

/**
 * Проверяем доступ к диретории
 * @param {*} path 
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