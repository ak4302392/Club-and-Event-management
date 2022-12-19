import express from "express";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventsForUser,
  getEventsForOrganizer,
} from "../controllers/events.js";
import { auth, organizerauth } from "../middleware/auth.js";

const router = express.Router();

//http://localhost:5000/posts

router.get("/AllForUser",auth,getEventsForUser);
router.get("/AllForOrganizer",auth,getEventsForOrganizer);
router.get("/", getEvents);
router.post("/", organizerauth, createEvent);
router.patch("/:id", auth, updateEvent);
router.delete("/:id", organizerauth, deleteEvent);

export default router;