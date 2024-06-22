const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.post('/:id', async (req, res) => {
    console.log('1')
    // const room = new Room({
    //   roomId: req.params.id,
    // });
    // try {
    //     await room.save();
    //     console.log(room);
    // } catch (error) {
    //     console.error(error);
    // }
});

router.put('/:id/dicenum', async (req, res) => {
    console.log('2') 
    // try {
    //     const room = await Room.find({roomId: req.params.id});
    //     room.diceNum = req.body.diceNum;
    //     await room.save();
    //     console.log(room);
    // } catch(error) {
    //     console.error(error);
    // }
});

// router.put('/:id/turnspeed', async (req, res) => {
//     try {
//         const room = await Room.find({roomId: req.params.id});
//         room.turnSpeed = req.body.turnSpeed;
//         await room.save();
//     } catch(error) {
//         console.error(error);
//     }
// });

module.exports = router;