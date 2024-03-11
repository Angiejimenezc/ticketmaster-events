import "./styles.css";

// eslint-disable-next-line react/prop-types
const EventItem = ({ info, id, name, image, onEventClick }) => {
  const handleSeeMoreClick = (evt) => {
    //detiene la propagacion del evento del padre
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <>
      <div
        onClick={() => console.log("click en el padre")}
        className="event-item-container"
      >
        <img src={image} alt="name" width={200} height={200} />
        <p>{info}</p>
        <h4>{name}</h4>
        <button onClick={handleSeeMoreClick}>Ver mas</button>
      </div>
    </>
  );
};

export default EventItem;
