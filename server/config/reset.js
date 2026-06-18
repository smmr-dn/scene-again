import eventData from "../data/events.js";
import venueData from "../data/venues.js";
import { pool } from "./database.js";

async function createEventTable() {
  const createEventQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        imdbRank INTEGER NOT NULL,
        imdbRating DECIMAL(3, 1) NOT NULL,
        year INTEGER NOT NULL,
        director VARCHAR(255) NOT NULL,
        genre VARCHAR(255)[] NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,   
        status VARCHAR(50) NOT NULL,
        whyRewatch TEXT NOT NULL,
        discussionPrompt TEXT NOT NULL,
        venueId VARCHAR(255) NOT NULL
    )
`;
  try {
    await pool.query(createEventQuery);
    console.log("🎉 Events table created successfully");
  } catch (err) {
    console.error("Error creating events table:", err);
  }
}

async function createVenueTable() {
  const createVenueQuery = `
    DROP TABLE IF EXISTS venues;

    CREATE TABLE IF NOT EXISTS venues (
        id TEXT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        tagline VARCHAR(255) NOT NULL,
        color VARCHAR(7) NOT NULL
    )
`;
  try {
    await pool.query(createVenueQuery);
    console.log("🎉 Venues table created successfully");
  } catch (err) {
    console.error("Error creating venues table:", err);
  }
}

const seedEventsTable = async () => {
  await createEventTable();

  eventData.forEach((event) => {
    const insertQuery = {
      text: "INSERT INTO events (title, image, imdbRank, imdbRating, year, director, genre, date, time, status, whyRewatch, discussionPrompt, venueId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
    };

    const values = [
      event.title,
      event.image,
      event.imdbRank,
      event.imdbRating,
      event.year,
      event.director,
      event.genre,
      event.date,
      event.time,
      event.status,
      event.whyRewatch,
      event.discussionPrompt,
      event.venueId,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting event", err);
        return;
      }

      console.log(`✅ ${event.title} added successfully`);
    });
  });
};

const seedVenuesTable = async () => {
  await createVenueTable();

  venueData.forEach((venue) => {
    const insertQuery = {
      text: "INSERT INTO venues (id, name, tagline, color) VALUES ($1, $2, $3, $4)",
    };

    const values = [venue.id, venue.name, venue.tagline, venue.color];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting venues", err);
        return;
      }

      console.log(`✅ ${venue.name} added successfully`);
    });
  });
};

seedEventsTable();
seedVenuesTable();
