import mongoose from "mongoose";
import User from "../models/user.js";
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
  const event = await Event.findOne({_id:_id})
  // console.log(event);
  const participants = event.participants;
  console.log(participants);
  const userId = req.userId;
  const new_participants = [...participants,userId];

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No event found with the id provided!");

  const updateEvent = await Event.findByIdAndUpdate(
    _id,
    { participants : new_participants},
    {
      new: true,
    }
  );

  res.send(updateEvent);
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with the id found");

  await Event.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully" });
};

export const getEventsForUser = async (req, res) => {
  try {
  const userId = req.userId;
    const events = await Event.find({participants:{$all:[userId]}});
    res.status(200).json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEventsForOrganizer = async (req, res) => {
  try {
  const userId = req.userId;
    var events = await Event.find({creator:userId});
    events.map((data)=>{
      var u_data = [];
      var u_error = [];
      data.participants.map(async(uid)=>{
        try {
          const user = await User.findOne({_id : uid} )
          u_data.push(user)
        } catch (error) {
          u_error.push(err)
        }
      })
      // console.log({...data , u_data , u_error})
      return {...data , u_data , u_error}
    })
    res.status(200).json(events);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
