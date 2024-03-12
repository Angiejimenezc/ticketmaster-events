/* import "./styles.css"; */
import styles from "./EventItem.module.css";
/* import { Link } from "react-router-dom"; */

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
        className={`${styles.eventItemContainer} ${styles.anotherContainer}`}
      >
        <img src={image} alt="name" width={200} height={200} />
        <div className={styles.eventInfoContainer}>
          <h4 className={styles.eventName}>{name}</h4>
          <p className={styles.eventInfo}>{info}</p>
          <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
            {/*         <Link to={`/detail:${id}`}></Link> */}
            Ver mas
          </button>
        </div>
      </div>
    </>
  );
};

export default EventItem;
