export const EventsAPI = {
  getAllEvents: async () => {
    const response = await fetch("/api/events");

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    return await response.json();
  },
  getEventsById: async (eventId) => {
    const response = await fetch(`/api/events/${eventId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch event with ID ${eventId}`);
    }

    return await response.json();
  },
};
