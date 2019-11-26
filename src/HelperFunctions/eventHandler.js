const eventHandler = events => {
  let eventsOut = events.sort((a, b) => {
    return new Date(a.eventDate) - new Date(b.eventDate);
  });

  // Go through the event array and determine the indexes of the cut-off events
  // That happened last week, this following week or in the next month

  let lastWeek = [];
  let thisWeek = [];
  let thisMonth = [];

  for (let i = 0; i < eventsOut.length; i++) {
    const eventDifference =
      (new Date(eventsOut[i].eventDate) - new Date()) / 1000 / 3600 / 24;
    if (eventDifference >= -7 && eventDifference < 0) {
      lastWeek.push(eventsOut[i]);
    } else if (eventDifference > 0 && eventDifference <= 7) {
      thisWeek.push(eventsOut[i]);
    } else if (eventDifference > 0 && eventDifference <= 31) {
      thisMonth.push(eventsOut[i]);
    }
  }

  return [lastWeek, thisWeek, thisMonth, eventsOut];
};

export default eventHandler;
