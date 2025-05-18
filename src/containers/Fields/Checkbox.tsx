// import React from 'react';
// import { useController } from 'react-hook-form';
// import type { UseControllerProps } from 'react-hook-form';

// import CheckboxBase from '@/components/components/Checkbox';
// import type { IProps as CheckboxProps } from '@/components/components/Checkbox';

// interface IProps extends CheckboxProps, UseControllerProps {
//   name: string;
// }

// const Checkbox: React.FC<IProps> = ({ name, onChange, ...props }) => {
//   const { field } = useController({ name });

//   return (
//     <CheckboxBase
//       {...field}
//       {...props}
//       checked={field.value}
//       onChange={value => {
//         onChange && onChange(value);
//         field.onChange(value);
//       }}
//     />
//   );
// };

// export default Checkbox;
