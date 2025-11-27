import User from "../models/userModel.js";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const findUserById = async (id) => {
  return await User.findOne({ id });
};

export const createUser = async (name, email, password) => {
  const newUser = new User({ name, email, password });
  await newUser.save();
  return newUser;
};

// export const updateUser = async (id, name, email, password) => {
//   const user = await User.findById(id);
//   if (!user) throw new Error("User not found");
//   user.name = name;
//   user.email = email;
//   user.password = password;
//   await user.save();
//   return user;
// };
