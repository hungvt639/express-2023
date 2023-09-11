import { Req, Res } from "@config/Express";
import io from "@service/io";
import HttpResponse from "@utils/response";

class CTest {
  static async hello(req: Req, res: Res) {
    console.log("Hello");

    HttpResponse.ok(res, {});
  }
}

export default CTest;
