import { Request, Response } from "express";
import prisma from "../../utils/connect";

// Get All of the Users
export const getEventbyId = async (req: Request, res: Response) => {
  try {
    const eventId = parseInt(req.params.id);
    console.log(eventId);
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
    console.log(events);
    res.status(200).json({ data: events });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
