import { Request, Response } from "express";
import prisma from "../../utils/connect";
import { CreateUserInput } from "../user/user.schema";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userData: CreateUserInput = req.body;
    console.log(userData);
    const user = await prisma.user.create({ data: userData });
    res.status(201).json({ data: user });
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    res.send(200);
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  res.send(200);
};
