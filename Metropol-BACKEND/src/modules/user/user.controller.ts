import { Request, Response } from "express";
import prisma from "../../utils/connect";

// Get All of the Users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany({
      select: {
        email: true,
        first_name: true,
        last_name: true,
        user_id: true,
      },
    });
    res.status(200).json({ data: allUsers });
  } catch (e) {
    console.log(e);
    res.status(500);
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
      select: {
        email: true,
        first_name: true,
        last_name: true,
        user_id: true,
      },
    });

    res.status(200).json({ data: user });
  } catch (e) {
    console.log(e);
  }
};
