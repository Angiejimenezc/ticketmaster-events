import Navbar from "./components/Navbar";
import "./App.css";
import Events from "./components/Events";
import { useState } from "react";
/* import SignupForm from "./components/SignupForm"; */

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavberSearch = (term) => {
    setSearchTerm(term);
  };

  //tenemos que guardar una bandera para saber si el usuario esta buscando o no crear un estado para eso.
  /*   console.log(searchTerm, 10); */

  return (
    <>
      <Navbar onSearch={handleNavberSearch} />
      <Events searchTerm={searchTerm} />
      {/* <SignupForm /> */}
    </>
  );
}

export default App;
