import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = forwardRef(({ onSearch }, ref) => {
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

  //useImperativeHandle es un hook que permite exponer una función al padre para que pueda ser llamada desde el padre
  useImperativeHandle(ref, () => ({
    search,
  }));

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
    <div
      ref={ref}
      style={{
        marginBottom: "20px",
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "0 0 0 20px",
          }}
        >
          My Boletera
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          placeholder="Busca tu evento favorito "
          onChange={handleInputChange}
          //evento que se dispara cuando se presiona una tecla
          onKeyDown={handleInputKeydown}
          value={search}
          style={{
            fontSize: "16px",
            padding: "6px 12px",
            borderRadius: "4px",
            border: "none",
            width: "200px",
          }}
        />
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
