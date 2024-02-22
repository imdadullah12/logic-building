"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/lib/validation-schema";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
        <div className="input">
          <input
            className="w-full bg-zinc-600 outline-none px-3 py-3 rounded-lg"
            placeholder="Your Name"
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 font-bold mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="input">
          <input
            className="w-full bg-zinc-600 outline-none px-3 py-3 rounded-lg"
            placeholder="Your Email"
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 font-bold mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="input">
          <input
            className="w-full bg-zinc-600 outline-none px-3 py-3 rounded-lg"
            placeholder="Your Phone"
            type="text"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 font-bold mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="input">
          <input
            className="w-full bg-zinc-600 outline-none px-3 py-3 rounded-lg"
            placeholder="Your Password"
            type="text"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 font-bold mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button type="submit" className="w-full bg-sky-700 py-3 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
