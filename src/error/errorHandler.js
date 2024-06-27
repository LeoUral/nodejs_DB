

/**
 * Обработка ошибок: 400, 401, 403, 404, 409
 * @param {String} message 
 * @returns 
 */
module.exports = (message) => {
    switch (message) {
        case 'unauthorized': return 401;
            break;

        case 'notFound': return 404;
            break;

        case 'forbidden': return 403;
            break;

        case 'conflict': return 409;
            break;

        default: return 400;
            break;
    }
}