module.exports = socket => {

    socket.on("joinRoom", data => {
        socket.join(data)
    })
    
}