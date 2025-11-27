import wrapAsync from "../../utils/tryCatchWrapper.js";
import { registerUser } from "../services/authService.js";

export const register_User = wrapAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  const token = await registerUser(name, email, password);
  res.status(200).json(token);
});

export const login_User = wrapAsync(async (req, res, next) => {
  res.send("Login");
});

