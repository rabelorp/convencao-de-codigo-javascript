import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData) {
    return await this.userRepository.create(userData);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(id) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  }

  async updateUser(id, userData) {
    const [updatedRows] = await this.userRepository.update(id, userData);
    if (updatedRows === 0) {
      throw new Error("Usuário não encontrado ou dados não modificados");
    }
    return await this.getUserById(id);
  }

  async deleteUser(id) {
    const deleted = await this.userRepository.delete(id);
    if (deleted === 0) {
      throw new Error("Usuário não encontrado");
    }
  }
}
