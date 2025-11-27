import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import { cookieOptions } from "../src/config/config.js";

export const generateNanoId = (length) => {
  return nanoid(length);
};

export const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, cookieOptions);
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, cookieOptions);
};
