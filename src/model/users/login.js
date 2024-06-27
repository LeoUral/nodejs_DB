const fs = require('fs/promises');
const path = require('path');
const checkLogIn = require('./checkLogIn');


/**
 * Вход в систему (email, password)
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports = async (req, res) => {
    try {
        const { password, email } = req.body;
        const urlDB = path.join(__dirname, '..', '..', '..', '..', '_DB')

        const usersData = await fs.readFile(`${urlDB}/users.json`)
        const checkUser = await checkLogIn(email, password, JSON.parse(usersData))

        if (!checkUser) throw new Error('unauthorized')

        return { result: JSON.parse(usersData).find(itm => itm.email === email) }
    } catch (err) {
        console.log(`Ошибка при входе: `, err);
        return { result: false, err: err.message }
    }
}