import express from "express";

import VenueController from "../controllers/venueControllers.js";

const router = express.Router();

// GET /api/venues -> the full list as JSON
router.get("/", VenueController.getAllVenues);

// GET /api/venues/:id -> a single venue
router.get("/:id", VenueController.getVenueById);

export default router;
