import wrapAsync from "../../utils/tryCatchWrapper.js";
import { cookieOptions } from "../config/config.js";
import { loginUser, registerUser } from "../services/authService.js";

export const register_User = wrapAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const { user, token } = await registerUser(name, email, password);
  req.user = user;
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ message: "Registered Successfully" });
});

export const login_User = wrapAsync(async (req, res) => {
  const { email, password } = req.body;
  const { user, token } = await loginUser(email, password);
  req.user = user;
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ user: user, message: "Login Successfully" });
});

export const logout_user = wrapAsync(async (req, res) => {
  res.clearCookie("accessToken", cookieOptions);
  res.status(200).json({ message: "Logout success" });
});

export const get_currentUser = wrapAsync(async (req, res) => {
  res.status(200).json({ user: req.user });
});
