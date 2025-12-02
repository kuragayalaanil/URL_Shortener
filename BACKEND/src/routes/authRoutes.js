import express from "express";

import {
  register_User,
  login_User,
  logout_user,
  get_currentUser,
} from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register_User);
router.post("/login", login_User);
router.post("/logout", logout_user);
router.get("/me", authMiddleware, get_currentUser);

export default router;
