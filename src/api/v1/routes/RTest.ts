import { Router } from "express";
import ROUTES from "./_route";
import _ from "../middlewares/fnHandler";
import CTest from "@v1/controllers/CTest";

const route = ROUTES.test;

const RTest = Router();

RTest.get(route.hello, _(CTest.hello));

export default RTest;
