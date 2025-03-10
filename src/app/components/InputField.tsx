"use client";
import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function InputField({
  label,
  type,
  register,
  error,
}: InputFieldProps) {
  return (
    <div>
      <input
        {...register}
        type={type}
        placeholder={label}
        className="input w-full input-secondary rounded-lg"
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
