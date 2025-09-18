import { Router } from "express";
import { getEventbyId, getEvents } from "./event.controller";
import passport from "passport";

const eventRouter = Router();
eventRouter.get("", getEvents);
eventRouter.get("/:id", getEventbyId);

export default eventRouter;
