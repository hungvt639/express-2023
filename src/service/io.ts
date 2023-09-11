import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import http from "http";

class Io {
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
  init = (server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) => {
    this.io = new Server(server);
    return this.io;
  };
}

export default new Io();
