---

# 🚀 API Rest Alunos - Node.js & Sequelize

Esta é uma API completa desenvolvida durante um estudo de JavaScript e TypeScript, focada em um sistema de gerenciamento de alunos, autenticação de usuários e upload de arquivos. O projeto demonstra o uso de padrões de mercado como **MVC (Model-View-Controller)** e segurança com **JWT**.

## 🛠 Tecnologias Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/)
- **ORM:** [Sequelize](https://sequelize.org/) (MariaDB/MySQL)
- **Autenticação:** [JSON Web Token (JWT)](https://jwt.io/)
- **Uploads:** [Multer](https://github.com/expressjs/multer)
- **Segurança:** [Bcryptjs](https://www.google.com/search?q=https://github.com/kelektiv/node.bcrypt.js) para hash de senhas.

---

## 📌 Principais Funcionalidades

- **Gerenciamento de Usuários:** Cadastro e edição de usuários com senhas criptografadas.
- **Autenticação:** Sistema de Login com geração de Token JWT e validação em rotas protegidas (Middleware).
- **CRUD de Alunos:** Gerenciamento completo de dados (nome, e-mail, idade, peso, altura).
- **Upload de Fotos:** Sistema de upload de fotos de perfil associadas a cada aluno.
- **Associações de Banco de Dados:** Relacionamento `1:N` (Um aluno pode ter várias fotos).
- **Campos Virtuais:** Geração automática da URL da foto para consumo no Front-end.

---

## 🗄 Estrutura de Banco de Dados

A API utiliza três tabelas principais relacionadas:

1. **Users:** Responsáveis pelo acesso administrativo à API.
2. **Alunos:** Cadastro principal dos estudantes.
3. **Fotos:** Armazena os nomes dos arquivos e a referência ao aluno (`aluno_id`).

---

## 🚀 Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/RavelRodrigues/project-api-rest.git

```

2. **Instale as dependências:**

```bash
npm install

```

3. **Configure o seu arquivo `.env`:**
   Crie um arquivo `.env` na raiz e configure suas credenciais do banco de dados e sua secret do JWT:

```env
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_USER=seu_usuario
DATABASE_PASS=sua_senha
DATABASE=nome_do_banco
TOKEN_SECRET=sua_assinatura_jwt
TOKEN_EXPIRATION=7d
URL=http://localhost:3001

```

4. **Rode as Migrations:**

```bash
npx sequelize db:migrate

```

5. **Inicie o servidor:**

```bash
npm run dev

```

---

## 🧠 Aprendizados Relevantes

Durante o desenvolvimento deste projeto, enfrentei e resolvi desafios como:

- **Tratamento de Erros Defensivo:** Evitar que o servidor caia em erros de conexão ou validação (Sequelize ValidationError).
- **Integridade Referencial:** Configuração de Chaves Estrangeiras e `onDelete: CASCADE`.
- **Middleware de Login:** Entendimento profundo de como injetar dados no objeto `req` para persistência de estado.

---

### ✉️ Contato

Desenvolvido por **[Ravel Rodrigues Pereira]** – [Ravel Rodrigues](linkedin.com/in/ravel-rodrigues-782499210)

---
