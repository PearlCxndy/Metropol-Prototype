import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "./auth.controller";

const authRouter = Router();

// Register a User
authRouter.post("/register", registerUser);

// Login
authRouter.get("/login", loginUser);

// Logout
authRouter.get("/logout", logoutUser);

export default authRouter;
