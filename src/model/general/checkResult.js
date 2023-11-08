const readData = require('./readData')
const checkUser = require('./checkUser')

/**
 * Проверка пользователя с URL
 * @param {*} email 
 * @param {*} password 
 * @param {*} token 
 * @param {*} urlDB 
 * @returns 
 */
module.exports = async (email, password, token, urlDB) => {
    try {
        // const urlDB = path.join(__dirname, '..', '..', '..', '_DB')
        const dataUsers = JSON.parse(await readData(`${urlDB}/users.json`))
        const result = await checkUser(email, password, token, dataUsers);

        return result
    } catch (err) {
        console.log(`ERROR, checking result: `, err);
    }
}