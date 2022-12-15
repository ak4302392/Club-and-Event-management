import mongoose from "mongoose";
import Event from "../models/events.js";

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  // console.log("Entered to the backend server for posting the data");
  // console.log(req);
  const event = req.body;

  const newEvent = new Event({
    ...event,
    createdAt: new Date().toISOString(),
  });

  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message.body });
  }
};

//updating the post
// /posts/id
export const updateEvent = async (req, res) => {
  const { id: _id } = req.params;
  const event = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No event found with the id provided!");

  const updateEvent = await Event.findByIdAndUpdate(
    _id,
    { ...event, _id },
    {
      new: true,
    }
  );

  res.json(updateEvent);
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with the id found");

  await Event.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully" });
};
