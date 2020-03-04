var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.send("<h1>Hello World");
});

io.on("connection", function(socket) {
  console.log("a user connected");
});

http.listen(3002, function() {
  console.log("listening on : 3002");
});
