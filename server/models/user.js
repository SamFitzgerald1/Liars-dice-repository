const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Player"
    },

    dice: {
        type: [Number],
        required: true,
        default: 0
    },

    isReady: {
        type: boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('user', userSchema);