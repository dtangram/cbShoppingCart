module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: { args: 4, msg: 'ID not valid, please try again.' },
      },
    },

    firstname: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'First name is required' },
    },

    lastname: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Last name is required' },
    },

    username: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Username is required' },
    },

    email: {
      type: DataTypes.STRING,
      unique: { args: true, msg: 'Email is already in use' },
      allowNull: { args: false, msg: 'Email is required' },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});

  Users.associate = (models) => {
    // associations can be defined here
    Users.hasMany(models.ComicBooks, { foreignKey: 'userId' });
  };

  return Users;
};
