const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const rooms = {};

app.post("/host", (req, res) => {

    const roomId = Math.floor(100000 + Math.random() * 900000).toString();

    rooms[roomId] = {
        host_ip: req.body.ip,
        players: 1
    };

    res.json({
        success: true,
        room: roomId
    });

});

app.post("/join", (req, res) => {

    const room = rooms[req.body.room];

    if (!room) {
        return res.json({
            success: false
        });
    }

    room.players++;

    res.json({
        success: true,
        ip: room.host_ip
    });

});

app.get("/rooms", (req, res) => {

    res.json(rooms);

});

app.listen(3000, () => {

    console.log("Server Running");

});
