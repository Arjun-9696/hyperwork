const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema(
    {
        profile_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'profile',
            required: true,
        },
        auction_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'auction',
            required: true,
        },
        bid_price: { type: Number, required: true },
        is_winning_bid: { type: Boolean, required: true, default: false }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Bid = mongoose.model('bid', bidSchema);
module.exports = Bid;
