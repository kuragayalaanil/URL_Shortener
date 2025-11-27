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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/create", shortUrlRouter);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

app.listen(3000, () => {
  conndectDB();
  console.log("Server is running on http://localhost:3000");
});
