module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ComicBooks', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },

    title: {
      type: Sequelize.STRING
    },

    publisher: {
      type: Sequelize.STRING
    },

    year: {
      type: Sequelize.INTEGER
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

  down: queryInterface => queryInterface.dropTable('ComicBooks'),
};
