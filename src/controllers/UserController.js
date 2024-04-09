import { UserService } from "../services/UserService";
import Logger from "../utils/Logger";

export class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(req, res) {
    try {
      const user = await this.userService.createUser(req.body);
      Logger.info("Usuário criado com sucesso.");
      res.status(201).json(user);
    } catch (error) {
      Logger.error("Erro ao criar usuário: " + error.message);
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      Logger.info("Usuários listados com sucesso.");
      res.status(200).json(users);
    } catch (error) {
      Logger.error("Erro ao listar usuários: " + error.message);
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (!user) {
        Logger.error("Usuário não encontrado.");
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
      Logger.info("Usuário encontrado com sucesso.");
      res.status(200).json(user);
    } catch (error) {
      Logger.error("Erro ao buscar usuário: " + error.message);
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await this.userService.updateUser(
        req.params.id,
        req.body
      );
      if (!updatedUser) {
        Logger.error("Erro ao atualizar usuário: Usuário não encontrado.");
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
      Logger.info("Usuário atualizado com sucesso.");
      res.status(200).json(updatedUser);
    } catch (error) {
      Logger.error("Erro ao atualizar usuário: " + error.message);
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const deleted = await this.userService.deleteUser(req.params.id);
      if (!deleted) {
        Logger.error("Erro ao deletar usuário: Usuário não encontrado.");
        return res.status(404).json({ error: "Usuário não encontrado." });
      }
      Logger.info("Usuário deletado com sucesso.");
      res.status(204).send();
    } catch (error) {
      Logger.error("Erro ao deletar usuário: " + error.message);
      res.status(500).json({ error: error.message });
    }
  }
}
