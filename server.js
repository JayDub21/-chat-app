var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http, { origins: "*:*" });
const PORT = process.env.PORT || 3002;

app.get("/", function(req, res) {
  res.send("<h1>socket.io chat- app server</h1>");
});

io.on("connect", function(socket) {
  console.log("a user connected");
  socket.on("chat message", function(msg) {
    console.log("message: ", JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

http.listen(PORT, function() {
  console.log(`🌎  ==> socket.io server now listening on PORT ${PORT}!`);
});
