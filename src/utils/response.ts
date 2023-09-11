import { StatusCodes } from "http-status-codes";
import { Res } from "@config/Express";

class HttpResponse {
  static badRequest(res: Res, message: string) {
    res.status(StatusCodes.BAD_REQUEST).json({ message });
  }

  static ok(res: Res, data: any) {
    res.status(StatusCodes.OK).json(data);
  }
  static created(res: Res, data: any) {
    res.status(StatusCodes.CREATED).json(data);
  }

  static unauthorizer(res: Res, message: string) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message });
  }

  static forbidden(res: Res, message: string) {
    res.status(StatusCodes.FORBIDDEN).json({ message });
  }
  static redirect(res: Res, to: string) {
    res.status(StatusCodes.MOVED_PERMANENTLY).redirect(to);
  }
}

export default HttpResponse;
