import { findUserById } from "../src/dao/findUser.js";
import { verifyToken } from "./helper.js";

export const attachUser = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next();

  try {
    const decoded = verifyToken(token);
    console.log(decoded);
    const user = await findUserById(decoded);
    if (!user) return next();
    req.user = user;
    console.log(user);
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};
