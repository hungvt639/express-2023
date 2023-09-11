import { Router } from "express";
import ROUTES from "./_route";
import RTest from "./RTest";
import { errorHandler } from "../middlewares/errorHandler";

const ApiV1 = Router();

ApiV1.use(ROUTES.test.root, RTest);

ApiV1.use(errorHandler);

export default ApiV1;
