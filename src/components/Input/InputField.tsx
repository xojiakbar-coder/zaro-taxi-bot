import { Controller } from "react-hook-form";
import type { Control, FieldError } from "react-hook-form";

interface InputFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  type?: string;
  error?: FieldError;
}

export const InputField = ({
  name,
  control,
  label,
  placeholder,
  type = "text",
  error,
}: InputFieldProps) => (
  <div className="flex flex-col">
    {label && (
      <label className="font-medium text-white mb-[8px]">{label}</label>
    )}
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          type={type}
          autoComplete="off"
          value={field.value ?? ""}
          placeholder={placeholder}
          className="text-black border border-gray-300 p-2 rounded-md focus:outline-none"
        />
      )}
    />
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
);
