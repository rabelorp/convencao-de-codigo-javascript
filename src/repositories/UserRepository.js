import User from "../models/UserModel";

export class UserRepository {
  async create({ name, email }) {
    try {
      const user = await User.create({ name, email });
      return user;
    } catch (error) {
      throw new Error("Erro ao criar usuário: " + error.message);
    }
  }

  async findAll() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error("Erro ao listar usuários: " + error.message);
    }
  }

  async findById(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw new Error("Erro ao buscar usuário: " + error.message);
    }
  }

  async update(id, { name, email }) {
    try {
      const [updatedRows] = await User.update(
        { name, email },
        { where: { id } }
      );
      return updatedRows;
    } catch (error) {
      throw new Error("Erro ao atualizar usuário: " + error.message);
    }
  }

  async delete(id) {
    try {
      const deleted = await User.destroy({ where: { id } });
      return deleted;
    } catch (error) {
      throw new Error("Erro ao deletar usuário: " + error.message);
    }
  }
}
