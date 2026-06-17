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

export default { getAllEvents };
