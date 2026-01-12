import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Ravel',
      sobrenome: 'Rodrigues',
      email: 'ravel@gmail.com',
      idade: 23,
      peso: 89,
      altura: 1.83,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
