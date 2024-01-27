import EventItem from "./components/EventItem";
import data from "../../data/events.json";

console.log(data);

const {_embedded: { events }} = data;

const Events = () => {

  const eventsComponent = events.map((eventItem) => {   
    return(    
      <EventItem 
      key={`event-item-${eventItem.id}`}
      name={eventItem.name}
      info={eventItem.info}
      image={eventItem.images[0].url}      
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
