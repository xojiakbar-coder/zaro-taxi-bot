import React from 'react';
import { get } from 'radash';
import { useController } from 'react-hook-form';
import type { UseControllerProps } from 'react-hook-form';

import Input from '../../components/components/Input';
import type { TextInputProps } from '../../components/components/Input/types';

interface IProps extends TextInputProps, UseControllerProps {
  name: string;
}

const Text: React.FC<IProps> = ({ name, ...props }) => {
  const {
    field,
    fieldState: { invalid, error }
  } = useController({ name });

  return (
    <Input
      {...field}
      {...props}
      message={invalid ? get(error, 'message') : undefined}
      state={invalid ? 'error' : undefined}
    />
  );
};

export default Text;
