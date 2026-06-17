import { pool } from "../config/database.js";

const getAllVenues = async (req, res) => {
  try {
    const venues = await pool.query("SELECT * FROM venues");
    res.status(200).json(venues.rows);
  } catch (error) {
    console.error("Error fetching venues:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getVenueById = async (req, res) => {
  try {
    const { id } = req.params;
    const venue = await pool.query("SELECT * FROM venues WHERE id = $1", [id]);
    if (venue.rows.length === 0) {
      return res.status(404).json({ error: "Venue not found" });
    }
    res.status(200).json(venue.rows[0]);
  } catch (error) {
    console.error("Error fetching venue:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { getAllVenues, getVenueById };
