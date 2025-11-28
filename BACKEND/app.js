import express from "express";
import dotenv from "dotenv";
dotenv.config("./.env");
import cors from "cors";

const app = express();

import conndectDB from "./src/config/mongo.config.js";

import shortUrlRouter from "./src/routes/shortUrlRoutes.js";
import authRouter from "./src/routes/authRoutes.js";

import { errorHandler } from "./utils/errorHandler.js";
import { redirectFromShortUrl } from "./src/controllers/shortUrlController.js";
import { attachUser } from "./utils/attachUser.js";
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(attachUser);
app.use("/api/auth", authRouter);
app.use("/api/create", shortUrlRouter);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

app.listen(3000, () => {
  conndectDB();
  console.log("Server is running on http://localhost:3000");
});
