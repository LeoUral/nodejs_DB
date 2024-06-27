const bcrypt = require('bcrypt');


/**
 * Проверка email & password
 * @param {String} email 
 * @param {String} password 
 * @param {Object} users 
 * @returns {Boolean} true / false
 */
module.exports = async (email, password, users) => {
    try {
        const user = users.find(itm => itm.email === email)
        const result = await bcrypt.compare(password, user.password)

        return result
    } catch (err) {
        return false
    }

}