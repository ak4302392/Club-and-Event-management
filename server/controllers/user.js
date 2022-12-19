import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signup = async (req, res) => {
  console.log("hello there");
  const { email, password, fullName, confirmPassword, college } = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser)
      return res.status(400).json({ message: "User already exits." });

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ message: "Confirm Password does not match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${fullName}`,
      userType: "User",
      college: college,
      active: true,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
    // res.status(200).json({ "message":"done" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const organizerSignup = async (req, res) => {
  console.log("hello there");
  const { email, password, fullName, confirmPassword, college } = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser)
      return res.status(400).json({ message: "User already exits." });

    if (password != confirmPassword)
      return res
        .status(400)
        .json({ message: "Confirm Password does not match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${fullName}`,
      userType: "Organizer",
      college: college,
      active: false,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
    // res.status(200).json({ "message":"done" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    if (!existingUser.active) {
      return res.status(404).json({ message: "You are not authorised" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid Password!" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        userType: existingUser.userType,
      },
      "test",
      { expiresIn: "1h" }
    );
    console.log("the token is ", token);

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const organizerSignin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    if (existingUser.userType != "Organizer")
      return res
        .status(404)
        .json({ message: "YOu are unauthorized for this page." });
    if (!existingUser.active) {
      return res.status(404).json({ message: "Account is not active" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid Password!" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        userType: existingUser.userType,
      },
      "test",
      { expiresIn: "1h" }
    );
    console.log("the token is ", token);

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const adminSignin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    if (existingUser.userType != "Admin")
      return res
        .status(404)
        .json({ message: "YOu are unauthorized for this page." });
    if (!existingUser.active) {
      return res.status(404).json({ message: "Account is not active" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid Password!" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        userType: existingUser.userType,
      },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllOrganizer = async (req, res) => {
  try {
    const existingUser = await User.find({ userType:"Organizer" });
    console.log(existingUser)
    res.json(existingUser );
  } catch (error) {
    res.json({ message: "Something went wrong" }).status(500);
  }
};

export const ActivateOrganizer = async (req, res) => {
  try {
    const {id} = req.body;
    const existingUser = await User.findOne({ _id : id ,userType:"Organizer" });
    existingUser.active = true;
    await existingUser.save();
    res.status(200).json({ result: existingUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
