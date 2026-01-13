import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      return res.json(novoUser);
    } catch (e) {
      console.log('ERRO REAL:', e);
      // 1. Verificamos se e.errors existe antes de usar o .map()
      if (e.errors && Array.isArray(e.errors)) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }

      // 2. Caso o erro seja outro
      return res.status(400).json({
        errors: ['Ocorreu um erro inesperado no servidor.'],
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk({ attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não foi enviado!'],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não foi enviado!'],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }

      await user.destroy(req.body);
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
