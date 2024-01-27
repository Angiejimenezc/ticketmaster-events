const EventItem = ({ info, name, image }) => {
  return (
    <>
      <img src={image} alt="name" width={200}h heigth={200} />
      <p>{info}</p>
      <h4>{name}</h4>
    </>
  );
};

export default EventItem;
