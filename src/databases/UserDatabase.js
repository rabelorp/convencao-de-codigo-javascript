import { Sequelize } from "sequelize";
import DataBaseConfig from "../config/dataBaseConfig.js";
import UserModel from "../model/UserModel.js";
import Logger from "../utils/Logger.js";

const models = [UserModel];
/* Design Pattern - Singleton Pattern:
    Agora UserDataBase utiliza o padrão Singleton para assegurar que a
    conexão do banco de dados seja única através da aplicação.
*/
class UserDataBase {
  static instance;

  constructor() {
    if (!UserDataBase.instance) {
      this.init().catch((error) => {
        Logger.error("Falha ao inicializar a base de dados: " + error.message);
      });
      UserDataBase.instance = this;
    }
    return UserDataBase.instance;
  }

  async init() {
    try {
      this.connection = new Sequelize(DataBaseConfig.connection());

      for (const model of models) {
        await model.init(this.connection);
        if (model.associate) {
          model.associate(this.connection.models);
        }
      }

      Logger.info(
        "Conexão com o banco de dados e modelos inicializados com sucesso."
      );
    } catch (error) {
      Logger.error(
        "Erro ao inicializar a conexão com o banco de dados: " + error.message
      );
      throw error; // Lança erro para garantir que falhas na inicialização sejam tratadas adequadamente
    }
  }

  async close() {
    try {
      await this.connection.close();
      Logger.info("Conexão com o banco de dados fechada com sucesso.");
    } catch (error) {
      Logger.error(
        "Erro ao fechar a conexão com o banco de dados: " + error.message
      );
    }
  }

  async transaction() {
    try {
      const transaction = await this.connection.transaction({
        autocommit: false,
      });
      Logger.info("Transação iniciada com sucesso.");
      return transaction;
    } catch (error) {
      Logger.error("Erro ao iniciar a transação: " + error.message);
      throw error;
    }
  }
}

export default new UserDataBase();
