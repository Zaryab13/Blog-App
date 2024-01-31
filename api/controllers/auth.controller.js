import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // Validation
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      throw errorHandler(400, "All Fields are Required");
      // return res.status(400).json({ message: "All fields are required" });
    }

    // Check if password is defined
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);
    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user
    await newUser.save();

    // Send a success response
    res.json({ message: "Signup Successful" });
  } catch (error) {
    next(error);
  }
};
