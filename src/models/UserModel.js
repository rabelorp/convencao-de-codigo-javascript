import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("sua_conexao_com_banco"); // Atualize com os detalhes da sua conexão

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    // Opções adicionais do modelo, se necessário
  }
);

export default User;
