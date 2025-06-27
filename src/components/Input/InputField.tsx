// import React from 'react';
// import { Input, type TextInputProps } from '@mantine/core';

// export interface IProps extends TextInputProps {}

// export const InputComponent: React.FC<IProps> = ({
//   value,
//   type = 'text',
//   name,
//   placeholder,
//   disabled,
//   autoFocus,
//   onChange,
//   onBlur,
//   onKeyUp,
//   onKeyDown,
//   onKeyPress,
//   ...props
// }) => {
//   return (
//     <Input.Wrapper>
//       <Input
//         {...{
//           value: value,
//           type,
//           placeholder,
//           disabled,
//           autoFocus,
//           id: name,
//           name,
//           onChange,
//           onKeyUp,
//           onKeyDown,
//           onKeyPress
//         }}
//         autoComplete="off"
//         autoCorrect="off"
//         autoCapitalize="off"
//         spellCheck="false"
//         className="text-black border border-gray-300 p-2 rounded-md focus:outline-none"
//         {...props}
//       />
//       {/* {error && <p className="text-red-500 text-sm">{error.message}</p>} */}
//     </Input.Wrapper>
//   );
// };
