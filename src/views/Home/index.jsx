import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import ReactPaginate from "react-paginate";
import { useState, useRef , useEffect } from "react";
import useEventsData from "../../hooks/useEventsData";
import styles from "./Home.module.css";
/* import SignupForm from "./components/SignupForm"; */

const Home = () => {
  const { events, isLoading, error, fetchEvents , page} = useEventsData();
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

  const handlePageClick = ({selected}) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
      }

  const renderEvents = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Ha ocurrido un error</div>;
    }
    
    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handleNavberSearch} ref={containerRef} />
      {renderEvents()}
      {<ReactPaginate 
      className={styles.pagination}
      nextClassName={styles.next}
      previosClassName={styles.previous}
      pageClassName={styles.page}
      activeClassName={styles.activePage} 
      disabledClassName={styles.disabledPage}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={page.totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
      />}
      
    </>
  );
};

export default Home;
