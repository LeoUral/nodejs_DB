require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require('path');
const chalk = require('chalk');
const logger = require('./logger');

const app = express();
const jsonParser = express.json();

const PORT = process.env.PORT || 3030;
app.use(cors()); // отключает CORS
app.use(jsonParser);

//todo: аутентификация и создание файла паролей

//todo: create file

//todo: update file

//todo: read file

//todo: delete file

//todo: search field in file


app.use((err, req, res, next) => {
    logger.fatal(err, 'NEW ERROR!')
    res.status(500).send(chalk.bgRed('Новая не обработанная ошибка: ', err.message))
});

app.listen(PORT, async () => {
    logger.info(`Server listens PORT: ${PORT}`);
    console.log(chalk.yellow(`logger: ${process.env.PINO_LOG_LEVEL}`));
    console.log(chalk.green(`Server run, PORT ${PORT}`));
})