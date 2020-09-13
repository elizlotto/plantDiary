
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const plantController = require('./controller/plantController');

//conect to mongoDB
const DB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.novem.mongodb.net/Plantery?retryWrites=true&w=majority`;

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//connecting to DB
mongoose.connection.once('open', () => {
  console.log('Connected to database.');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/plant', plantController.getPlants, (req, res) => {
  console.log('get plants')
  res.json(res.locals.plant);
});

app.post('/plant', plantController.createPlant, (req, res) => {
  console.log('in plant post route')
  res.json(res.locals.plant);
});

app.put('/plant/:_id', plantController.editPlant, (req, res) => {
  res.json(res.locals.plant);
});

app.delete('/plant/:_id', plantController.deletePlant, (req, res) => {
  res.json(res.locals.plant);
});

// catch-all endpoint handler
// app.use((req, res) => {
//   return res.status(400).send('Page not found.')
// });

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error!',
    status: 500,
    message: { err: 'An error occurred!' }
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
  console.log('Magic happening on ' + PORT);
});

module.exports = app;
