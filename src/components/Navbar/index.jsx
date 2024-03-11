import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("onSearch cambió");
  }, [onSearch]);

  useEffect(() => {
    console.log("componente listo");
  }, []);

  useEffect(() => {
    return () => {
      console.log("search cambió");
    };
  }, [search]);

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
