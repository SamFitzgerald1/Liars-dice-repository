module.exports = socket => {

    socket.on('sendMessage', data => {
        socket.to(data.roomId).emit("receiveMessage", data);
    })
    
}