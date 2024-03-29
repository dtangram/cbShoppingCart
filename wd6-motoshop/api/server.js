// File upload
// const fileUploader = require('express-fileupload');

// Heroku Server
const express = require('express');

// Heroku Server
const path = require('path');

// setting up a logger - Heroku Server and Node Server
const log = require('debug')('api:logging');

// get the express application - Heroku Server & Node Server
const app = require('./app');

// set the port to either the one passed from the environment variables or 4000
// Heroku
const port = process.env.PORT || 5000;

// set the port to either the one passed from the environment variables or 4000
// Node Server
// const port = process.env.PORT || 4000;

// Heroku Server
// Serve any static files
app.use(express.static(path.join(__dirname, '../reactjs/build')));

// Heroku Server
// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../reactjs/build', 'index.html'));
});

// File Upload
// app.use(fileUploader());
//
// app.post('/upload', (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: 'No file' });
//   }
//
//   const { file } = req.files.file;
//
//   file.mv(`${__dirname}/reactjs/src/components/sale/images/${file.name}`, (err) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//
//     res.json({ fileName: file.name, filePath: `/images/${file.name}` });
//
//     return err;
//   });
//
//   return req;
// });

// spin up the server and log what port it is running on - Heroku Server and Node Server
app.listen(port, () => log(`API listening on port ${port}!`));
