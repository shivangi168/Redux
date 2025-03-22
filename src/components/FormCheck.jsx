import { useForm } from "react-hook-form";

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      {/* Email Field */}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email format",
          },
        })}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
