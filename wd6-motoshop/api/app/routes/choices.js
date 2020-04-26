// import the express router
const router = require('express').Router();

// import the comicBook controller
const comicBookCtrl = require('../controllers/comicBooks');

// GET /comicBooks?questionId=___
router.get('/', comicBookCtrl.getQuestionComicBooks);

// POST /comicBooks
router.post('/', comicBookCtrl.createComicBook);

// GET /comicBooks/:id
router.get('/:id', comicBookCtrl.getOneById);

// PUT /comicBooks/:id
router.put('/:id', comicBookCtrl.updateComicBook);

// DELETE /comicBooks/:id
router.delete('/:id', comicBookCtrl.removeComicBook);

// export the route from this file
module.exports = router;
