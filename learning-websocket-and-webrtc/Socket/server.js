const express = require("express");
const app = express();

const colors = require("colors");
const path = require("path");
const {createServer} = require("http");
const {Server} = require("socket.io");

// express server to raw node server
const httpServer = createServer(app);

// socket server init
const io = new Server(httpServer);

io.on('connection', (socket) => {

    console.log(`Client connection successfull!`.bgCyan.black);

    socket.on('disconnect', () => {
        console.log(`Client disconnected successfull!`.bgRed.black);
    });

    socket.send({
        name :  'Rohan Mostafa',
        age : 40,
        number : '02145878546'
    });

    socket.emit('testData', {
        name :  'SK Farhan',
        age : 15,
        number : '014475878955'
    });

    socket.emit('testData2', 'Rohan Mostafa', 20, 'MERN DEV');
    
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/client.html'));
});

httpServer.listen(5050, () => {
    console.log(`Server running on PORT 5050!`.bgGreen);
});

