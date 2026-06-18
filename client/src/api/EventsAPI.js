export const EventsAPI = {
  getAllEvents: async () => {
    const response = await fetch("/api/events");

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    return await response.json();
  },

  getEventById: async (eventId) => {
    const response = await fetch(`/api/events/${eventId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch event with ID ${eventId}`);
    }

    return await response.json();
  },

  getVenueById: async (venueId) => {
    const response = await fetch(`/api/venues/${venueId}`);

    console.log("Venue API response:", response);

    if (!response.ok) {
      throw new Error(`Failed to fetch venue with ID ${venueId}`);
    }

    return await response.json();
  },

  getEventsByVenueId: async (venueId) => {
    const response = await fetch(`/api/venues/${venueId}/events`);

    console.log("Events API response:", response);

    if (!response.ok) {
      throw new Error(`Failed to fetch events for venue with ID ${venueId}`);
    }

    return await response.json();
  },
};
