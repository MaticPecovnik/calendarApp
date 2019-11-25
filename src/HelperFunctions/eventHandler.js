const eventHandler = events => {
  let eventsOut = events.sort((a, b) => {
    return new Date(a.eventDate) - new Date(b.eventDate);
  });

  return eventsOut;
};

export default eventHandler;
