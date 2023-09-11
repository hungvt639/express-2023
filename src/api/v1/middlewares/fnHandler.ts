import { Next, Req, Res } from "@config/Express";
import { RequestHandler } from "express";

type FnRequestHandler = (req: Req, res: Res, next?: Next) => Promise<any>;

export default (fn: FnRequestHandler, role?: string): RequestHandler =>
  (req: Req, res: Res, next: Next) => {
    querys(req);
    return fn(req, res, next).catch(next);
  };

export const querys = (req: Req) => {};
