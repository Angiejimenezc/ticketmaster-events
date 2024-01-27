import EventItem from "./components/EventItem";
import data from "../../data/events.json";

console.log(data);

const {
  _embedded: { events },
} = data;

const Events = () => {
   const eventsComponent = events.map((eventItem) => {
  
    const imageUrl = eventItem.image && Array.isArray(eventItem.image) && eventItem.image.length > 0
    ? eventItem.image[0].url
    : 'defaultImageUrl'; // Provide a default image URL or handle it as needed
    return(    
    <EventItem 
      key={`event-item-${eventItem.id}`}
      name={eventItem.name}
      info={eventItem.info}
      image={imageUrl}
       />  
    ) 
  });
    
  return (
    <div>
      Eventos      
      {eventsComponent}
    </div>
  );
};

export default Events;
