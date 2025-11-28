import { verifyToken } from "../../utils/helper";
import { findUserById } from "../dao/findUser";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json({ message: "Unauthorised" });

  try {
    const decoded = verifyToken(token);
    const user = await findUserById(decoded);
    if (!user) return res.status(401).json({ message: "Unauthorised" });
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorised" });
  }
};
