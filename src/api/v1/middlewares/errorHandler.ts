import { Next, Req, Res } from "@config/Express";
import HttpResponse from "@utils/response";

export function errorHandler(err: any, req: Req, res: Res, next: Next) {
  if (err.parent) return HttpResponse.badRequest(res, err.parent.sqlMessage);
  return HttpResponse.badRequest(res, err.message);
}
