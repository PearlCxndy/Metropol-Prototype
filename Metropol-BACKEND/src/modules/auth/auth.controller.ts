import { Request, Response } from "express";
import prisma from "../../utils/connect";
import bcrypt from "bcrypt";
import { RegisterUserInput, LoginUserInput } from "./auth.schema";
import { issueJWT } from "../../utils/jwt.utils";
import { verifyPassword } from "../../utils/verify";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userData: RegisterUserInput = req.body;

    const salt = await bcrypt.genSalt(
      parseInt(process.env.SALTWORKFACTOR as string)
    );
    const hash = await bcrypt.hash(userData.password_hash, salt);

    const user = await prisma.user.create({
      data: {
        ...userData,
        salt,
        password_hash: hash,
      },
      omit: {
        salt: true,
        password_hash: true,
      },
    });

    const jwt = issueJWT(user);

    res
      .status(201)
      .json({ data: user, token: jwt.token, expiresIn: jwt.expires });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const userData: LoginUserInput = req.body;
    const email = userData.email;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(401).json({ error: "Could not find the user" });
    }

    const isValid = await verifyPassword({
      candidatePassword: userData.password,
      salt: user?.salt,
      hash: user?.password_hash,
    });

    if (isValid) {
      const jwt = issueJWT(user);

      res.status(200).json({ token: jwt.token, expiresIn: jwt.expires });
    }
  } catch (err) {
    res.send(500).json({ error: err });
    console.log(err);
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  // try {
  //   req.logout();
  // } catch (err) {
  //   res.status(500);
  // }
};
