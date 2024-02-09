import Navbar from "./components/Navbar";
import "./App.css";
import Events from "./components/Events";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavberSearch = (term) => {
    setSearchTerm(term);
  };

  console.log(searchTerm, 10);

  return (
    <>
      <Navbar onSearch={handleNavberSearch} />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
