const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Room = require('../models/room');

router.post(':id/new', async (req, res) => {
    const user = new User({
        roomId: req.params.id
    });
    try {
        await user.save();
        await Room.findOneAndUpdate({roomId: req.params.id}, {$push: {users: user}});
    } catch (error) {
        console.error(error);
    }
});

router.post('destroy', async (req, res) => {
    await User.dropDatabase();
    await Room.dropDatabase();
})