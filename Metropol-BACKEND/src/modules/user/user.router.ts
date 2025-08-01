import { Router } from "express";
import { getAllUsers, getUserById } from "./user.controller";
import passport from "passport";

const userRouter = Router();

userRouter.get(
  "/allusers",
  passport.authenticate("jwt", { session: false }),
  getAllUsers
);

userRouter.get("/:id", getUserById);

export default userRouter;
