const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Ravel0',
      email: 'ravelseeds0@gmail.com',
      password_hash: await bcryptjs.hash('12345678', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Ravel1',
      email: 'ravelseeds1@gmail.com',
      password_hash: await bcryptjs.hash('12345678', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Ravel2',
      email: 'ravelseeds2@gmail.com',
      password_hash: await bcryptjs.hash('12345678', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Ravel3',
      email: 'ravelseeds3@gmail.com',
      password_hash: await bcryptjs.hash('12345678', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Ravel4',
      email: 'ravelseeds4@gmail.com',
      password_hash: await bcryptjs.hash('12345678', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
