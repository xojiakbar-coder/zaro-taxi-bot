import { Controller } from "react-hook-form";
import type { Control, FieldError } from "react-hook-form";

interface SelectFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  options: { label: string; value: string | number }[];
  placeholder?: string;
  error?: FieldError;
}

export const SelectField = ({
  name,
  control,
  label,
  options,
  placeholder,
  error,
}: SelectFieldProps) => (
  <div className="flex flex-col gap-1">
    {label && <label className="font-medium text-white">{label}</label>}
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <select
          {...field}
          className="border border-gray-300 p-2 rounded-md bg-white text-black focus:outline-none"
        >
          <option value="">{placeholder || "Tanlang..."}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
    />
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
);
