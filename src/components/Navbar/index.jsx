import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

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
        onKeyDown={handleInputKeydown}
        value={search}
      />
    </div>
  );
};

export default Navbar;
