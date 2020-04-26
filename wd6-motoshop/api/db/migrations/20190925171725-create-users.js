module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },

    firstname: {
      type: Sequelize.STRING
    },

    lastname: {
      type: Sequelize.STRING
    },

    username: {
      type: Sequelize.STRING,
    },

    email: {
      type: Sequelize.STRING,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: queryInterface => queryInterface.dropTable('Users'),
};
