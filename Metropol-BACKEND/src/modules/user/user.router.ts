import { Router } from "express";
import { createUser, getAllUsers, getUserById } from "./user.controller";

const userRouter = Router();

userRouter.post("/createuser", createUser);

userRouter.get("/allusers", getAllUsers);

userRouter.get("/:id", getUserById);

export default userRouter;
