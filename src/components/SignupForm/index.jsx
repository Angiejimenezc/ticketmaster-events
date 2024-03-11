import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [cp, setCp] = useState("");
  const [phone, setPhone] = useState("");

  const handleClearClick = () => {
    setName("");
    setAge("");
    setAddress("");
    setCp("");
    setPhone("");
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    console.log({ submit: name, age, address, cp, phone });
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label>
          {" "}
          Nombre:
          <input
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            value={age}
            onChange={(evt) => setAge(evt.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Adreess:
          <input
            value={address}
            onChange={(evt) => setAddress(evt.target.value)}
            required
          />
        </label>
        <br />
        <label>
          CP:
          <input
            value={cp}
            onChange={(evt) => setCp(evt.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            value={phone}
            onChange={(evt) => setPhone(evt.target.value)}
            required
          />
        </label>
        <br />
        <div>
          <button type="button" onClick={handleClearClick}>
            {" "}
            Clear
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
