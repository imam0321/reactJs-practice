import React from "react";
import FieldSet from "../FieldSet";
import Field from "../Field";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { email: "test@gmail.com", password: "test@gmail.com" };
    const found =
      formData.email === user.email && formData.password === user.password;

    if (!found) {
      setError("root.random", {
        message: `User with email '${formData.email}' is not found`,
        type: "random",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email : " error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.email ? "border-red-500" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label="Password : " error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your Password must be at least 8 characters",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.password ? "border-red-500" : "border-gray-200"
              }`}
            />
          </Field>
        </FieldSet>
        <div className="text-red-400">{errors?.root?.random.message}</div>
        <Field>
          <button className="border-2 block border-y-green-400 rounded-lg cursor-pointer mx-2 px-4 py-1">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}
