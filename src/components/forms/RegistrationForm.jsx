import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import FieldSet from "../FieldSet";
import Field from "../Field";
import NumberInput from "../NumberInput";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Your Basic Details">
          <Field label="Full Name : " error={errors.fname}>
            <input
              {...register("fname", { required: "Full Name is required" })}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter your Full Name"
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.fname ? "border-red-500" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label="Age : " error={errors.age}>
            <Controller
              name="age"
              defaultValue={1}
              control={control}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"                 
                  className={`p-2 border box-border w-[300px] rounded-md ${
                    !!errors.age ? "border-red-500" : "border-gray-200"
                  }`}
                  {...field}
                />
              )}
              rules={{
                max: {
                  value: 40,
                  message: "Age can be between 0 and 40",
                },
              }}
            />
          </Field>
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

        {/* Socials Details name url  */}
        <FieldSet label="Enter Your Socials Details">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex justify-between items-center w-max"
            >
              <Field label={"Social Name"}>
                <input
                  {...register(`socials[${index}].name`)}
                  type="text"
                  name={`socials[${index}].name`}
                  id={`socials[${index}].name`}
                  className={`p-2 border box-border me-2 w-[300px] rounded-md ${
                    !!errors.password ? "border-red-500" : "border-gray-200"
                  }`}
                />
              </Field>
              <Field label={"Social URL"}>
                <input
                  {...register(`socials[${index}].url`)}
                  type="text"
                  name={`socials[${index}].url`}
                  id={`socials[${index}].url`}
                  className={`p-2 border box-border w-[300px] rounded-md ${
                    !!errors.password ? "border-red-500" : "border-gray-200"
                  }`}
                />
              </Field>
              <button
                onClick={() => remove(index)}
                className="border-2 block border-red-400 rounded-lg cursor-pointer px-2 py-2 text-center ms-2 mt-9"
              >
                X
              </button>
            </div>
          ))}

          <button
            onClick={() => append({ name: "", url: "" })}
            className="border-2 border-x-green-400 rounded-lg cursor-pointer px-4 py-1 my-2"
          >
            Add a Social Handle
          </button>
        </FieldSet>

        <Field>
          <button className="border-2 block border-y-green-400 rounded-lg cursor-pointer mx-2 px-4 py-1">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
}
