import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

function FormValidation({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Enter name" />
      <p>{errors.name?.message}</p>

      <input {...register("email")} placeholder="Enter email" />
      <p>{errors.email?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;
