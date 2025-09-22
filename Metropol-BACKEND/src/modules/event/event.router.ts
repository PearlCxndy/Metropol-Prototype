import { Router } from "express";
import {
  getDailyEvents,
  getEventbyId,
  getEvents,
  getMonthlyEvents,
  getWeeklyEvents,
} from "./event.controller";
import passport from "passport";

const eventRouter = Router();

eventRouter.get("/daily", getDailyEvents);
eventRouter.get("/weekly", getWeeklyEvents);
eventRouter.get("/monthly", getMonthlyEvents);
eventRouter.get("/:id", getEventbyId);
eventRouter.get("", getEvents);

export default eventRouter;
