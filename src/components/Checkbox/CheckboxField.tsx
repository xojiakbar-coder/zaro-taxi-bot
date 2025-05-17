import { Controller } from "react-hook-form";
import type { Control, FieldError } from "react-hook-form";

interface CheckboxFieldProps {
  name: string;
  control: Control<any>;
  label: string;
  error?: FieldError;
}

export const CheckboxField = ({
  name,
  label,
  error,
  control,
}: CheckboxFieldProps) => (
  <div className="flex items-center gap-2">
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          type="checkbox"
          checked={!!field.value}
          className="w-4 h-4"
        />
      )}
    />
    <label className="text-white">{label}</label>
    {error && <p className="text-red-500 text-sm ml-2">{error.message}</p>}
  </div>
);
