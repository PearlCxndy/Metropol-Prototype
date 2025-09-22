import { Request, Response } from "express";
import prisma from "../../utils/connect";

// Get Event by ID
export const getEventbyId = async (req: Request, res: Response) => {
  try {
    const eventId = parseInt(req.params.id);
    const event = await prisma.event.findUnique({
      where: {
        event_id: eventId,
      },
    });
    console.log(event);
    res.status(200).json({ data: event });
  } catch (e) {
    console.log(e);
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({});
    res.status(200).json({ data: events });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const getDailyEvents = async (req: Request, res: Response) => {
  try {
    const today = new Date(
      new Date().toISOString().split("T")[0] + "T00:00:00.000Z"
    );
    const event = await prisma.event.findMany({
      where: {
        event_time: {
          equals: today,
        },
      },
    });
    res.status(200).json({ data: event });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const getWeeklyEvents = async (req: Request, res: Response) => {
  try {
    const today = new Date(
      new Date().toISOString().split("T")[0] + "T00:00:00.000Z"
    );
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);
    nextWeek.toISOString();
    const event = await prisma.event.findMany({
      where: {
        event_time: {
          lte: nextWeek,
          gte: today,
        },
      },
    });
    res.status(200).json({ data: event });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export const getMonthlyEvents = async (req: Request, res: Response) => {
  try {
    const today = new Date(
      new Date().toISOString().split("T")[0] + "T00:00:00.000Z"
    );
    const nextMonth = new Date(today);
    nextMonth.setDate(nextMonth.getDate() + 30);
    nextMonth.toISOString();
    const event = await prisma.event.findMany({
      where: {
        event_time: {
          lte: nextMonth,
          gte: today,
        },
      },
    });
    res.status(200).json({ data: event });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
