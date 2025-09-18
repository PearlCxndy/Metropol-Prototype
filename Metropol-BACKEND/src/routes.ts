import { Express, Request, Response } from "express";
import userRouter from "./modules/user/user.router";
import authRouter from "./modules/auth/auth.router";
import eventRouter from "./modules/event/event.router";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send(200);
  });

  app.use("/api/users", userRouter);

  app.use("/api/events", eventRouter);

  app.use("/api/auth", authRouter);
}

export default routes;
