require("dotenv").config();
var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http, { origins: "*:*" });
// const axios = require("axios");
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.get("/", function(req, res) {
  res.send("<h1>socket.io chat- app server</h1>");
});

io.on("connect", function(socket) {
  console.log("a user connected @", socket.id);
  socket.on("chat message", function(msg) {
    console.log("message: ", JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

http.listen(PORT, function() {
  console.log(`🌎  ==> socket.io server now listening on PORT ${PORT}!`);
});

// setInterval(() => io.emit("time", new Date().toTimeString()), 1000);
