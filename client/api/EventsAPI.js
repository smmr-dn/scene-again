export const EventsAPI = {
  getEventsById: async (eventId) => {
    const response = await fetch(`/api/events/${eventId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch event with ID ${eventId}`);
    }
    const data = await response.json();
    return data;
  },
};
