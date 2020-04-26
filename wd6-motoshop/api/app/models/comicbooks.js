module.exports = (sequelize, DataTypes) => {
  const ComicBooks = sequelize.define('ComicBooks', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: { args: 4, msg: 'ID not valid, please try again.' },
      },
    },

    title: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Title is required' },
    },

    publisher: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Publisher is required' },
    },

    year: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Year is required' },
    },
  }, {});

  ComicBooks.associate = (models) => {
    // associations can be defined here
    ComicBooks.belongsTo(models.Users, { foreignKey: 'userId' });
  };

  return ComicBooks;
};
