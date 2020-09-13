const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema{
    item: { type: String, require: true},
    price: { type: String, require: true},
    date: {type: Date, default: Date.now()}
}

module.exports = mongoose.model(Accessory, accessorySchema);