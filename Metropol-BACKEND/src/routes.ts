import { Express, Request, Response } from "express";
import userRouter from "./modules/user/user.router";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.send(200);
  });

  app.use("/api/user", userRouter);
}

export default routes;
