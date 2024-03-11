import eventsJSON from "../data/events.json";
import { useState, useEffect } from "react";
/* import { useRef, useEffect } from "react"; */

const useEventsData = () => {
  const [data, setData] = useState([]);
  /* const data = useRef([]); */
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        setData(eventsJSON);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 4000);
    //load API Call
  }, []);

  console.log("data", data);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};

export default useEventsData;
