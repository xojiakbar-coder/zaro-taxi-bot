import { DatePickerInput as MantineDatePickerInput, type DatePickerInputProps } from '@mantine/dates';
import { useController, type FieldValues, type UseControllerProps } from 'react-hook-form';

type IProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<DatePickerInputProps, 'name' | 'value' | 'onChange' | 'error'>;

export function Date<T extends FieldValues>({ control, name, rules, defaultValue, ...rest }: IProps<T>) {
  const {
    field,
    fieldState: { error }
  } = useController<T>({
    name,
    rules,
    control,
    defaultValue
  });

  return <MantineDatePickerInput {...rest} {...field} error={error?.message} />;
}

export default Date;
