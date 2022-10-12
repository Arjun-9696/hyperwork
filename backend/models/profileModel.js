const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        total_points: { type: Number, required: true ,default: 0},
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Profile = mongoose.model('profile', profileSchema);
module.exports = Profile;
