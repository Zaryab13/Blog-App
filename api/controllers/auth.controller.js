import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validation
    if (!username || !email || !password || username === "" || email === "" || password === "") {
      return res.status(400).json({ message: "All fields are required" });
    }
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
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
