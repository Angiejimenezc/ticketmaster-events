import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  //evento que se dispara cuando el valor del input cambia
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  //paso onSearch como parametro para que el padre sepa que el usuario esta buscando
  const handleInputKeydown = (event) => {
    if (event.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div>
      <p>My Boletera</p>
      <input
        placeholder="Busca tu evento favorito "
        onChange={handleInputChange}
        //evento que se dispara cuando se presiona una tecla
        onKeyDown={handleInputKeydown}
        value={search}
      />
    </div>
  );
};

export default Navbar;
