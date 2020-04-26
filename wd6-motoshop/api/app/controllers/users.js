// load in the user Model
const { Users } = require('../models');

exports.getUsers = async (req, res) => {
  // get the id from the url params
  const { id } = req.params;
  // run the find all function on the model
  // filter the users to only users that were created by this user
  const userUsers = await Users.findAll({ where: { id } });
  // respond with json of the user users array
  res.json(userUsers);
};

// find one user by id
exports.getOneById = async (req, res) => {
  // get the id from the url params
  const { id } = req.params;
  // search our user model for the user
  const userID = await Users.findByPk(id);
  // if no user is found
  if (!userID) {
    // return a 404 (not found) code
    res.sendStatus(404);
    return;
  }

  // if the user is found send it back.
  res.json(userID);
};

// add a new user
exports.createUser = async (req, res) => {
  // get the username, email, password and type values from the request body
  const { firstname, lastname, username, email, password } = req.body;
  // pull the question id from the url params
  const { userId } = req.params;

  try {
    // create the item and save the new id
    const newUser = Users.create({
      firstname, lastname, username, email, password, userId
    });

    // send the new id back to the request
    res.json({ id: newUser.id });
  } catch (e) {
    // map the errors messages to send them back
    const errors = e.errors.map(err => err.message);
    res.status(400).json({ errors });
  }

  // const saltRounds = await bcrypt.genSalt(10);
  // const hash = await bcrypt.hash(req.body.password, saltRounds);
  // const password = hash;
  // // create the item and save the new id
  // const newUser = Users.create({
  //   username, email, password, type,
  // });
  //
  // // send the new id back to the request
  // res.json({ id: newUser.id });

  // // create the item and save the new id
  // const newUser = await Users.create({
  //   username, email, password, type,
  // });
};

// update an existing user
exports.updateUser = async (req, res) => {
  // get the id from the url params
  const { id } = req.params;

  try {
    // update the user with the request body
    const [, [updatedUser]] = await Users.update(req.body, {
      // only update the row using the id in the url
      where: { id },
      // return the updated row
      returning: true,
    });

    // send the updated user back to the front-end
    res.json(updatedUser);
  } catch (e) {
    // map the errors messages to send them back
    const errors = e.errors.map(err => err.message);
    res.status(400).json({ errors });
  }
};

// delete a user
exports.removeUser = async (req, res) => {
  // get the id from the url params
  const { id } = req.params;
  // remove the user
  await Users.destroy({ where: { id } });
  // send a good status code
  res.sendStatus(200);
};

// Made changes to add user to database.
