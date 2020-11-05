const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema{
    email: {type: String, require: true},
    item: { type: String, require: true},
    price: { type: String, require: true},
    date: {type: Date, default: Date.now()}
}

module.exports = mongoose.model(Accessory, accessorySchema);