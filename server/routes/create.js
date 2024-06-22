const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.post('/:id', async (req, res) => {
    const room = new Room({
      roomId: req.params.id,
    });
    try {
        await room.save();
        console.log('post')
        console.log(room);
    } catch (error) {
        console.error(error);
    }
});

router.put('/:id/dicenum', async (req, res) => {
    try {
        const room = await Room.findOne({roomId: req.params.id});
        room.diceNum = req.body.diceNum;
        await room.save();
        console.log('put')
        console.log(room);
    } catch(error) {
        console.error(error);
    }
});

// router.put('/:id/turnspeed', async (req, res) => {
//     try {
//         const room = await Room.findOne({roomId: req.params.id});
//         room.turnSpeed = req.body.turnSpeed;
//         await room.save();
//     } catch(error) {
//         console.error(error);
//     }
// });

router.delete('/:id/delete', async (req, res) => {
    try {
        await Room.findOneAndDelete({roomId: req.params.id});
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;