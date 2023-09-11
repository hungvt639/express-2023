import { Request, Response, NextFunction } from "express";
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface Req extends Request {
  queries?: Querys;
  query: { [key: string]: string };
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
}
export class Querys {}
export interface Res extends Response {}

export interface Next extends NextFunction {}
