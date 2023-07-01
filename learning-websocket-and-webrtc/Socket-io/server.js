const express = require("express");
const app = express();
const colors = require("colors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");
const {readFileSync, writeFileSync} = require("fs");
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {

    console.log(`Client connection successfull!`.bgMagenta);

    socket.on("disconnect", () => {
        console.log(`Client disconnected successfull!`.bgRed.black);
    });

    socket.send({
        name :  'Rohan Mostafa',
        age : 20,
        number : '01631699535'
    });

    socket.emit("testData", {
        name :  "SK Farhan",
        age : 15
    });

    socket.emit('testData2', 'Rohan Mostafa', 20, 'MERN DEV');

    socket.on("msg", (data) => {
        io.sockets.emit("inputData", data);
    })

    let latestData = JSON.parse(readFileSync(path.join(__dirname, "/database/database.json")).toString());
    io.sockets.emit("latestData", latestData);

    socket.on("chat", ({name, photo, message}) => {
        let oldData = JSON.parse(readFileSync(path.join(__dirname, "/database/database.json")).toString());
        oldData.push({name, photo, message});
        writeFileSync(path.join(__dirname, "/database/database.json"), JSON.stringify(oldData));
        JSON.stringify(oldData);

        let latestData = JSON.parse(readFileSync(path.join(__dirname, "/database/database.json")).toString());
        io.sockets.emit("latestData", latestData);
    })

});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/client.html"));
});

httpServer.listen(5050, () => {
    console.log(`Server running on port 5050!`.bgGreen);
});
