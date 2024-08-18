import React from "react";
import { useForm } from "react-hook-form";

interface InputTextProps {
  id: string;
  label: string;
  isRequired?: boolean;
  className?: string;
}

const InputText = ({ id, label, isRequired, className }: InputTextProps) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-harvey-gray-1"
      >
        {label}
      </label>
      <input
        type="text"
        className="border border-harvey-gray-2 text-gray-900 text-sm block w-full p-2.5 rounded-harvey-radius-0"
        {...register(id, { required: isRequired })}
      />
      {/* errors will return when field validation fails  */}
      {errors[id] && (
        <span className="border border-red">This field is required</span>
      )}
    </div>
  );
};

export default InputText;
