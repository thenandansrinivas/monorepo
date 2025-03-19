import dotenv from "dotenv";

const ENV = process.env.NODE_ENV;
dotenv.config({
  path: ENV === "dev" ? "../.env.dev" : "../.env",
});

export const CONFIG = {
  ENV:ENV,
  PORT: process.env.PORT,
};
