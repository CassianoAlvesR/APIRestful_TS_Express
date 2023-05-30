import mongoose from "mongoose";
import config from "config";

// logs
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectado ao Banco com sucesso.");
  } catch (e) {
    Logger.error("Erro ao conectar com o banco!");
    Logger.error(`Erro: ${e}`);
    process.exit(1);
  }
}

export default connect;
