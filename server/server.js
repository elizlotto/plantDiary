const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const cookieParser = require("cookie-parser");
const plantController = require("./controller/plantController");
const authController = require("./controller/authController");
const cookieController = require("./controller/cookieController");
const jwtDecode = require("jwt-decode");


require("dotenv").config();
// app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//serve the production build
app.use('/dist', express.static(path.join(__dirname, "../dist")));
//sending the index 
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../client/src/index.html'));
});

//login for google oAuth2 
app.get("/login", authController.oAuth, (req, res) => {
return res.redirect(res.locals.url);
});
//Oauth logic after success
app.get(
"/success",
authController.onSuccess,
// add middleware to see if user is in database, if not, add them
cookieController.setSSIDcookie,
(req, res) => {
// redirect to a page that will then check if there is an SSID cookie called 'user' ()
res.status(200).redirect("/loggedIn");
}
);

//send user to the index
app.get("/loggedIn", cookieController.verifyCookie, (req, res) => {
console.log('in loggedIn')
// add middleware to check for SSID cookie
res.status(200).sendFile(path.resolve(__dirname, "../client/src/index.html"));
});

//jwt logic
app.get("/user", (req, res) => {
const { email, name, picture } = jwtDecode(req.cookies.user);
res.send({ email, name, picture });
});

//database routes below
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
// return res.status(400).send('Page not found.')
// });

// global error handler
app.use((err, req, res, next) => {
const defaultErr = {
log: "Express error handler caught unknown middleware error!",
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

