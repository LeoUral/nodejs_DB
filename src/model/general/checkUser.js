const bcrypt = require('bcrypt');

/**
 * Проверка пользователя 
 * @param {String} email 
 * @param {String} password 
 * @param {String} token 
 * @param {Array} dataUsers 
 * @returns {Boolean} true/false
 */
module.exports = async (email, password, token, dataUsers) => {
    const user = dataUsers.find(item => item.email === email)

    if (!user) return false

    if (token !== user.token) return false

    console.log(`user: `, user); // test
    const result = await bcrypt.compare(password, user.password)
    console.log(`result -> `, result);  // test

    return result
}