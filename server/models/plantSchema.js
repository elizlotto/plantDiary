const mongoose = require("mongoose");
require("dotenv").config();

const DB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.novem.mongodb.net/Plantery?retryWrites=true&w=majority`;

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//connecting to DB
mongoose.connection.once("open", () => {
  console.log("Connected to database.");
});

const plantSchema = new mongoose.Schema({
  email: {type: String, require: true},
  plant: { type: String, require: true },
  acquired: { type: String, require: true },
  status: { type: String, require: true },
  price: { type: String, require: true },
});

module.exports = mongoose.model("Plant", plantSchema);
