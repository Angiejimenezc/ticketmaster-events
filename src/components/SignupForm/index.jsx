import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [cp, setCp] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <form>
        <label>
          {" "}
          Nombre:
          <input value={name} onChange={(evt) => setName(evt.target.value)} />
        </label>
        <label>
          Age:
          <input value={age} onChange={(evt) => setAge(evt.target.value)} />
        </label>
        <label>
          Adreess:
          <input
            value={address}
            onChange={(evt) => setAddress(evt.target.value)}
          />
        </label>
        <label>
          CP:
          <input value={cp} onChange={(evt) => setCp(evt.target.value)} />
        </label>
        <label>
          Phone:
          <input value={phone} onChange={(evt) => setPhone(evt.target.value)} />
        </label>
      </form>
    </div>
  );
};

export default SignupForm;
