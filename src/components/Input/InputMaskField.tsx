import MaskInput from "react-maskinput";
import { Controller } from "react-hook-form";
import type { Control, FieldError } from "react-hook-form";

type MaskedInputFieldProps = {
  control: Control<any>;
  name: string;
  label?: string;
  mask: string;
  placeholder: string;
  error?: FieldError;
  alwaysShowMask?: boolean;
};

export const MaskedInputField = ({
  control,
  name,
  label,
  mask,
  // placeholder,
  error,
  alwaysShowMask = false,
}: MaskedInputFieldProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1 text-white">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MaskInput
            {...field}
            mask={mask}
            alwaysShowMask={alwaysShowMask}
            // placeholder={placeholder}
            // className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};
