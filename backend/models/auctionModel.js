const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        total_points: { type: Number, required: true, default: 0 },
        item_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item',
            required: true,
        },
        unit_price: { type: Number, required: true},
        quantity: { type: Number, required: true},
        is_completed: { type: Boolean, required: true, default: false }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Auction = mongoose.model('auction', auctionSchema);
module.exports = Auction;
