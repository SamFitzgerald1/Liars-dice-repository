const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.post('/:id', async (req, res) => {

    // if(Room.exists({roomId: req.params.id})) {
    //     console.log('true');
    //     const room = Room.findOneAndUpdate({roomId: req.params.id}, {$push: {users: req.body.username}});
    //     return;
    // }
    
    const room = new Room({
      roomId: req.params.id,
      //users: [req.body.usename]
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
        const room = await Room.findOne({roomId: req.params.id});
        room.numOfDice = req.body.numOfDice;
        room.turnSpeed = req.body.turnSpeed;
        await room.save();
        console.log(room);
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:id/delete', async (req, res) => {
    try {
        await Room.findOneAndDelete({roomId: req.params.id});
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;