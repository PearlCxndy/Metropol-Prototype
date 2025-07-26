import { Request, Response } from "express";
import prisma from "../../utils/connect";
import { CreateUserInput } from "./user.schema";

// Get All of the Users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).json({ data: allUsers });
  } catch (e) {
    console.log(e);
  }
};

// Create User (temp)
export const createUser = async (req: Request, res: Response) => {
  try {
    const userData: CreateUserInput = req.body;
    console.log(userData);
    const user = await prisma.user.create({ data: userData });
    res.status(201).json({ data: user });
  } catch (e) {
    console.log(e);
  }
};

// Update User but only when you are Auth

// Get User by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
      where: {
        user_id: userId,
      },
    });

    res.status(200).json({ data: user });
  } catch (e) {
    console.log(e);
  }
};
