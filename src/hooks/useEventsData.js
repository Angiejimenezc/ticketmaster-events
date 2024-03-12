/* import eventsJSON from "../data/events.json"; */
/* import { useRef, useEffect } from "react"; */
import { useState } from "react";

const useEventsData = () => {
  /* const data = useRef([]); */
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=WWpppCStGKAqUdyKpkrypivczf8fhYwu&countryCode=UK& ${
          params.length ? params : ""
        }`
      );
      const data = await response.json();

      console.log("data", data);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  console.log("data", data);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
