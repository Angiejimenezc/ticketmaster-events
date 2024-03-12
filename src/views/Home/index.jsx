import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import { useState, useRef } from "react";
import useEventsData from "../../hooks/useEventsData";
import { useEffect } from "react";
/* import SignupForm from "./components/SignupForm"; */

const Home = () => {
  const { events, isLoading, error, fetchEvents } = useEventsData();
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavberSearch = (term) => {
    console.log(containerRef.current);
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  return (
    <>
      <Navbar onSearch={handleNavberSearch} ref={containerRef} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Events searchTerm={searchTerm} events={events} />
      )}
      {!!error && <div>Ha ocurrido un error</div>}
    </>
  );
};

export default Home;
