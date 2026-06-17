import { pool } from "../config/database.js";

const getAllEvents = async (req, res) => {
  try {
    const events = await pool.query("SELECT * FROM events");
    res.status(200).json(events.rows);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await pool.query("SELECT * FROM events WHERE id = $1", [id]);
    if (event.rows.length === 0) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(event.rows[0]);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { getAllEvents, getEventById };
