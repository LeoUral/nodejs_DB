require('dotenv').config();
const express = require('express');
const cors = require('cors')
const path = require('path');
const chalk = require('chalk');
const logger = require('./logger');
const router = require('./src/routes/index');

const app = express();
const jsonParser = express.json();

// app.use(cors()); // отключает CORS
// credentials: 'include', //* для фронта в запросе
// credentials: 'same-origin',
app.use(cors(
    {
        origin: ["http://localhost:3000"], // перечень доступных 
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
        credentials: true,
        // credentials: 'include', //* для фронта в запросе
        // credentials: 'same-origin',
        allowedHeaders: "Content-Type, Authorization, X-Requested-With",
    }
));

app.use(jsonParser);
app.use(express.urlencoded());

//TODO: Необходимо сделать:

//todo: аутентификация и создание файла паролей (через cookie (http: only))
//todo: сформировать POST запрос с личными данными, ответ - получение TOKENа

// deleteController:
// todo: Удаление документа в указанной коллекции.
// todo: Удаление коллекции (перед удалением проверить на отстутсвие в ней документов)

// searchController:
// todo: Сделать поиск в документах указанной позиции. Далее в файлах

app.use('/api/v1/auth', router);

app.use((err, req, res, next) => {
    logger.fatal(err, 'NEW ERROR!')
    res.status(500).send(chalk.bgRed('Новая не обработанная ошибка: ', err.message))
});

app.listen(process.env.PORT, async () => {
    logger.info(`Server listens PORT: ${process.env.PORT}`);
    console.log(chalk.yellow(`logger: ${process.env.PINO_LOG_LEVEL}`));
    console.log(chalk.green(`Server run, PORT ${process.env.PORT}`));
})