import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <label>
          {" "}
          Nombre:
          <input {...register("name", { required: true })} />
        </label>
        <br />
        <label>
          Age:
          <input {...register("age", { required: true })} />
        </label>
        <br />
        <label>
          Adreess:
          <input {...register("address", { required: true })} />
        </label>
        <br />
        <label>
          CP:
          <input {...register("cp", { required: true })} />
        </label>
        <br />
        <label>
          Phone:
          <input {...register("phone", { required: true })} />
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
