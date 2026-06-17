import express from "express";
import EventController from "../controllers/eventControllers.js";

const router = express.Router();

// GET /api/events -> the full list as JSON
router.get("/", EventController.getAllEvents);

export default router;
