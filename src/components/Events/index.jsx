import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/EventItem";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventsData();
  const navigate = useNavigate();

  const handleEventItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let filteredEvents = events;

    // eslint-disable-next-line react/prop-types
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
