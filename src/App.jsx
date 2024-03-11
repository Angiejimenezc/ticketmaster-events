import Navbar from "./components/Navbar";
import "./App.css";
import Events from "./components/Events";
import { useState, useRef } from "react";
/* import SignupForm from "./components/SignupForm"; */

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  const handleNavberSearch = (term) => {
    console.log(containerRef.current);
    setSearchTerm(term);
  };

  //tenemos que guardar una bandera para saber si el usuario esta buscando o no crear un estado para eso.
  /*   console.log(searchTerm, 10); */

  return (
    <>
      <Navbar onSearch={handleNavberSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
      {/* <SignupForm /> */}
    </>
  );
}

export default App;
