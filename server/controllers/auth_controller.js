const User = require("../models/user-models");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    console.log("Received request body:", req.body); // Log the request body
    const { username, email, phone, password } = req.body;

    // if (!username || !email || !phone || !password) {
    //   console.log("Missing required fields");
    //   return res.status(400).json({ msg: "All fields are required" });
    // }

    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("Email already exists");
      return res.status(400).json({ msg: "Email already exists" });
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashPassword,
    });

    console.log("User created successfully:", userCreated);
    res.status(201).json({
      message: "Registration successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // console.error("Error during registration:", error);
    // res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

/*
----------------Login form Logic---------------------
*/

const login = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  console.log(userExist);

  if (!userExist) {
    return res.status(500).json({ msg: "Invalid Credientials" });
  }

  // const user = await bcrypt.compare(password, userExist.password);

  const user = await userExist.comparePassword(password);

  if (user) {
    res.status(200).json({
      msg: "login Sucessfull",
      token: await userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  } else {
    res.status(401).json({ msg: "Invalid Email or Password" });
  }
};

const user = (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json({ msg: "hi user"});
  } catch (error) {
    res.status(401).json({ msg: "Invalid user " });
  }
};

module.exports = { register, login, user };
