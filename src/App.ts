import express, { Express } from "express";
import * as path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import http from "http";
import env from "@config/env";
import { Req, Res } from "@config/Express";
import morgan from "@config/morgan";
import ApiV1 from "@v1/routes";
import Io from "@service/io";
import io from "@service/io";
class App {
  private app: Express;
  private server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
  // public io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;

  constructor() {
    this.app = express();

    this.app.use(cors({ origin: env.CORS_ORIGIN }));
    this.app.get("/health", async (req: Req, res: Res) => res.status(200).json({ message: "OK" }));
    this.app.use("/public", express.static(path.join(__dirname, "../", "public")));
    this.app.use(morgan("combined"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    // this.app.use("/api/user", ApiUser);
    this.app.use("/api/v1", ApiV1);
    this.server = http.createServer(this.app);
    // this.io = new Server(this.server);
    io.init(this.server);
  }

  async run() {
    this.server.listen(env.PORT, async () => {
      console.log(`App listening at http://0.0.0.0:${env.PORT}`);
    });
  }
}

const server = new App();
export default server;
