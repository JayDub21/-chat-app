require("dotenv").config();
var express = require("express");
var app = express();
var http = require("http").createServer(app);
// var io = require("socket.io")(http, { origins: "*:*" });
const socketIO = require("socket.io");
const PORT = process.env.PORT || 3000;
const INDEX = "./client/src/index.js";

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// app.get("/", function(req, res) {
//   res.send("<h1>socket.io chat- app server</h1>");
// });

// io.on("connect", function(socket) {
//   console.log("a user connected");
//   socket.on("chat message", function(msg) {
//     console.log("message: ", JSON.stringify(msg));
//     io.emit("chat message", msg);
//   });
// });

// http.listen(PORT, function() {
//   console.log(`🌎  ==> socket.io server now listening on PORT ${PORT}!`);
// });

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on("connection", socket => {
  console.log("Client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));
});

setInterval(() => io.emit("time", new Date().toTimeString()), 1000);
