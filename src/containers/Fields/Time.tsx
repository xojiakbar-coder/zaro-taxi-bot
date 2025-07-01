import { TimeInput as MantineTimeInput, type TimeInputProps } from '@mantine/dates';
import { useController, type FieldValues, type UseControllerProps } from 'react-hook-form';

type IProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TimeInputProps, 'name' | 'value' | 'onChange' | 'error'>;

export function Time<T extends FieldValues>({ control, name, rules, defaultValue, ...rest }: IProps<T>) {
  const {
    field,
    fieldState: { error }
  } = useController<T>({
    name,
    rules,
    control,
    defaultValue
  });

  return <MantineTimeInput {...rest} {...field} error={error?.message} />;
}

export default Time;
