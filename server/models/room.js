const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true
    },
    
    users: {
        type: [mongoose.SchemaTypes.ObjectId],
        required: true,
        default: []
    },

    numOfDice: {
        type: Number,
        required: true,
        default: 0
    },

    turnSpeed: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('room', roomSchema);