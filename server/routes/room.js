const express = require('express');
const router = express.Router();
const Room = require('../models/room');
const User = require('../models/user');

router.post('/:id', async (req, res) => {
    const room = new Room({
      roomId: req.params.id
    });
    try {
        await room.save();
        console.log('post')
        console.log(room);
    } catch (error) {
        console.error(error);
    }
});

router.put('/:id/edit', async (req, res) => {
    try {
        await Room.findOneAndUpdate({roomId: req.params.id}, {
            $set: {
                numOfDice: req.body.numOfDice,
                turnSpeed: req.body.turnSpeed
            },
            $push: {users: new User({name: req.body.name, roomId: req.params.id})}
        });
        const room = await Room.findOne({roomId: req.params.id})
        console.log(room);
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:id/delete', async (req, res) => {
    try {
        await Room.findOneAndDelete({roomId: req.params.id});
        await User.deleteMany({roomId: req.param.id});
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;