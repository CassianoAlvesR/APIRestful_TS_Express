// ENV Variables
require("dotenv").config();

import express from "express"
import config from "config"

const app = express()

// JSON middleware
app.use(express.json())

// DB Connect
import db from "../config/db"

// Rotas
import router from "./router"

// Logs
import Logger from "../config/logger";

// Middlewares
import morganMiddleware from "./middleware/morganMiddleware"

// App Port
const port = config.get<number>("port");

app.use(morganMiddleware);

app.use("/api/", router);

app.listen(port, async () => {
    await db();

    Logger.info(`Aplicação rodando na porta ${port}`);
})