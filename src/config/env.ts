import dotenv from "dotenv";
dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 8000,
  CORS_ORIGIN: (process.env.CORS_ORIGIN || "").split(" ").map((o) => new RegExp(o)),

  LIMIT_DEFAULT: "10",
  PAGE_DEFAULT: "1",

  AVATAR_DEFAULT: "https://cdn.minearena.net/game-backend/avatar/avatar.jpg",
};
