// load in the comicBooks Model
const { ComicBooks } = require('../models');

// get all the comicBookss with a type of public
exports.getQuestionComicBooks = async (req, res) => {
  const { questionId } = req.query;
  // run the find all function on the model
  const questionComicBooks = await ComicBooks.findAll({ where: { questionId } });
  // respond with json of the public comicBookss array
  res.json(questionComicBooks);
};

// find one comicBooks by id
exports.getOneById = async (req, res) => {
  // get the id from the url params
  const { id } = req.params;
  // search our comicBooks model for the comicBooks
  const comicBook = await ComicBooks.findByPk(id);
  // if no comicBooks is found
  if (!comicBook) {
    // return a 404 (not found) code
    res.sendStatus(404);
    return;
  }

  // if the comicBooks is found send it back.
  res.json(comicBook);
};


// add a new comicBooks
exports.createComicBook = async (req, res) => {
  // get title, publisher  year and userId values from the request body
  const { title, publisher, year, userId } = req.body;

  try {
    // create the item and save the new id
    const newComicBook = await ComicBooks.create({ title, publisher, year, userId });

    // send the new id back to the request
    res.json({ id: newComicBook.id });
  } catch (e) {
    // map the errors messages to send them back
    const errors = e.errors.map(err => err.message);
    res.status(400).json({ errors });
  }
};

// update an existing comicBooks
exports.updateComicBook = async (req, res) => {
  // get the id from the url params
  const { id } = req.params;

  try {
    // update the comicBook with the request body
    const [, [updatedComicBook]] = await ComicBooks.update(req.body, {
      // only update the row using the id in the url
      where: { id },
      // return the updated row
      returning: true,
    });

    // send the updated comicBook back to the front-end
    res.json(updatedComicBook);
  } catch (e) {
    // map the errors messages to send them back
    const errors = e.errors.map(err => err.message);
    res.status(400).json({ errors });
  }
};

// delete a comicBooks
exports.removeComicBook = async (req, res) => {
  // get the id from the url params
  const { id } = req.params;
  // remove the comicBooks
  await ComicBooks.destroy({ where: { id } });
  // send a good status code
  res.sendStatus(200);
};
