const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    roomId: {
        type: String,
        required: true
    },

    dice: {
        type: [Number],
        required: true,
        default: []
    },

    isReady: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('user', userSchema);