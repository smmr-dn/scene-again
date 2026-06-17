import express from "express";

import EventController from "../controllers/eventControllers.js";

const router = express.Router();

// GET /api/events -> the full list as JSON
router.get("/", EventController.getAllEvents);

// GET /api/events/:id -> a single event
router.get("/:id", EventController.getEventById);

export default router;
