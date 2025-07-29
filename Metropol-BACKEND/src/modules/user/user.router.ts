import { Router } from "express";
import { getAllUsers, getUserById } from "./user.controller";

const userRouter = Router();

userRouter.get("/allusers", getAllUsers);

userRouter.get("/:id", getUserById);

export default userRouter;
