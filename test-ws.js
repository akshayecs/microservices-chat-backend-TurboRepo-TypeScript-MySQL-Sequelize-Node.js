const { io } = require("socket.io-client");
const token = "<JWT>";
const socket = io("http://localhost:5000", { auth: { token } });

socket.on("connect", () => {
  console.log("connected", socket.id);
  socket.emit("join_room", 1);
  socket.emit("send_message", { roomId: 1, content: "hi from test" });
});

socket.on("message", (m) => console.log("got message", m));
