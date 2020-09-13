const mongoose = require('mongoose');


const plantSchema = new mongoose.Schema({
    name: { type: String, require: true },
    petName: { type: String, require: false },
    acquired: { type: String, require: false },
    status: { type: String, require: false },
    price: { type: String, require: false },

});
module.exports = mongoose.model('Plant', plantSchema);