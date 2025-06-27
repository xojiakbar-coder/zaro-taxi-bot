import React from 'react';
import { TextInput, type TextInputProps } from '@mantine/core';

export interface IProps extends TextInputProps {}

export const TextInputComponent: React.FC<IProps> = ({ ...props }) => {
  return (
    <TextInput
      autoCorrect="off"
      autoComplete="off"
      spellCheck="false"
      autoCapitalize="off"
      className="text-black border border-gray-300 p-2 rounded-md focus:outline-none"
      {...props}
    />
  );
};
{
  /* {error && <p className="text-red-500 text-sm">{error.message}</p>} */
}
