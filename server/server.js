const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

const cookieParser = require("cookie-parser");
const plantController = require("./controller/plantController");
const authController = require("./controller/authController");
const { oAuth } = require("./controller/authController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/login', authController.oAuth, (req, res) => {
  return res.redirect(res.locals.url);
})
app.get("/plant", plantController.getPlants, (req, res) => {
  res.json(res.locals.plant);
});

app.post("/plant", plantController.createPlant, (req, res) => {
  res.json(res.locals.plant);
});

app.put("/plant/:_id", plantController.editPlant, (req, res) => {
  res.json(res.locals.plant);
});

app.delete("/plant/:_id", plantController.deletePlant, (req, res) => {
  res.json(res.locals.plant);
});

// catch-all endpoint handler
// app.use((req, res) => {
//   return res.status(400).send('Page not found.')
// });

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unkown middleware error!",
    status: 500,
    message: { err: "An error occurred!" },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log("Magic happening on " + PORT);
});

module.exports = app;
