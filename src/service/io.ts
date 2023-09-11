import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import http from "http";

class Io {
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
  init = (server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) => {
    this.io = new Server(server, { cors: { origin: "*" } });

    this.io.on("connection", (socket) => {
      console.log(`User Connected: ${socket.id}`);

      socket.on("join_room", (data) => {
        socket.join(data);
      });

      socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
      });
    });
    return this.io;
  };
}

export default new Io();
