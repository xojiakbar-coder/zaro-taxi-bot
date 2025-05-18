// import React from 'react';
// import { get } from 'radash';
// import { useController } from 'react-hook-form';
// import type { UseControllerProps } from 'react-hook-form';

// import DatePickerBase from '@/components/components/DatePicker';
// import type { IProps as DatePickerProps } from '@/components/components/DatePicker';

// interface IProps extends DatePickerProps, UseControllerProps {
//   name: string;
// }

// const DatePicker: React.FC<IProps> = ({ name, ...props }) => {
//   const {
//     field,
//     fieldState: { invalid, error }
//   } = useController({ name });

//   return (
//     <DatePickerBase
//       {...field}
//       {...props}
//       message={invalid ? get(error, 'message') : undefined}
//       state={invalid ? 'error' : undefined}
//     />
//   );
// };

// export default DatePicker;
