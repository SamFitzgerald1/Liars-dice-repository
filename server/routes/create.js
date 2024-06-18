const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.get('/:id', async (req, res) => {

    console.log('working');
    
    // const room = new Room({
    //     roomId: req.params.id,
    // });
    // try {
    //     await room.save();
    //     const test = await Room.find({roomId: req.params.id});
    //     res.send(test);
    // } catch (error) {
    //     console.error(error);
    // }
});

module.exports = router;