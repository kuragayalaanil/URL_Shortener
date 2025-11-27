import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../dao/findUser.js";
import { ConflictError } from "../../utils/errorHandler.js";
import { signToken } from "../../utils/helper.js";

export const registerUser = async (name, email, password) => {
  const user = await findUserByEmail({ email });
  if (user) throw new ConflictError("User already registered");

  const newUser = await createUser(name, email, password);
  const token = await signToken({ id: newUser._id });
  return token;
};
