import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/userModel";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
  });
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(403).json("User Alredy Exists" )
    
  }
  try {
    const user_1 = await user.save();
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const userByID = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    return user
      ? res.status(200).json({ user })
      : res.status(404).json({ message: "not found" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  return User.findById(userId)
    .then((user) => {
      if (user) {
        user.set(req.body);

        return user
          .save()
          .then((user) => res.status(201).json({ user }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: "not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  return User.findByIdAndDelete(userId)
    .then((user) =>
      user
        ? res.status(201).json({ user, message: "Deleted" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

export default { createUser, getAllUser, updateUser, deleteUser, userByID };
