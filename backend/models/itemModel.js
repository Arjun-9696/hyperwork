const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Item = mongoose.model('item', itemSchema);
module.exports = Item;
