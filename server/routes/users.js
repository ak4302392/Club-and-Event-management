import express from "express";
import { ActivateOrganizer, adminSignin, getAllOrganizer, organizerSignin, organizerSignup, signin, signup } from "../controllers/user.js";
import { adminauth } from "../middleware/auth.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/admin/signin",adminSignin);
router.post("/organizer/signin",organizerSignin);
router.post("/organizer/signup",organizerSignup);
router.get("/allOrganizers",adminauth,getAllOrganizer);
router.post("/organizer/activate",adminauth,ActivateOrganizer);

export default router;