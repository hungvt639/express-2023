import server from "./App";
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") require("module-alias/register");

server.run();
