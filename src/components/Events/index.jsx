import { useState } from "react";

import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";

const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data;

  const handleEventItemClick = (id) => {
    console.log("Event item clicked: ", id);
  };

  const renderEvents = () => {
    let filteredEvents = events;

    if (searchTerm.length > 0) {
      filteredEvents = filteredEvents.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
    }
    return filteredEvents.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ));
  };

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
