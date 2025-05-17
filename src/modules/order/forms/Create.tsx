// import React from 'react';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import type { UseFormReturn } from 'react-hook-form';
// import { FormProvider, useForm } from 'react-hook-form';
// import * as yup from 'yup';

// import * as Api from '../api';
// import * as Mappers from '../mappers';
// import * as Types from '../types';

// import { keepOptions } from '@/helpers';

// interface FormValues extends Types.IForm.Create {}

// interface IChildren extends UseFormReturn<FormValues> {
//   isLoading?: boolean;
// }

// interface IProps {
//   children: (props: IChildren) => React.ReactNode;
//   className?: string;
//   onError?: (error: string) => void;
//   onSettled?: () => void;
//   onSuccess?: (value: Types.IEntity.Order) => void;
// }

// const CreateForm: React.FC<IProps> = ({ children, onError, onSettled, onSuccess, className }) => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation<Types.IEntity.Order, string, FormValues, any>(
//     async values => {
//       const { data } = await Api.Create({ values });

//       return Mappers.Room(data && data.data);
//     },
//     {
//       onSuccess: data => {
//         onSuccess && onSuccess(data);
//         queryClient.invalidateQueries({
//           predicate: query => query.queryKey[0] === 'order' && query.queryKey[1] === 'list'
//         });
//       },
//       onError,
//       onSettled
//     }
//   );

//   const validationSchema = yup
//     .object()
//     .shape({
//       is_delivery: yup.boolean(),
//       ride_price: yup.string(),
//       cashback_used_percent: yup.number(),
//       front_seat: yup.boolean().required('Majburiy maydon'),
//       extra_luggage: yup.string().required('Majburiy maydon'),
//       is_cashback_used: yup.boolean(),
//       car_type: yup
//         .string()
//         .oneOf(['Standart', 'Comfort', 'Biznes'], 'Mashina turi noto‘g‘ri tanlandi')
//         .required('Mashina turi majburiy'),
//       date_of_departure: yup.string().required('Majburiy maydon'),
//       payment_type: yup
//         .string()
//         .oneOf(['Cash', 'Card'], 'To‘lov turi noto‘g‘ri tanlandi')
//         .required('Mashina turi majburiy')
//     })
//     .required();

//   const form = useForm<FormValues>({
//     defaultValues: {
//       telegram_id: 'telegramId',
//       is_delivery: false,
//       ride_price: '0',
//       cashback_used_percent: 0,
//       front_seat: false,
//       extra_luggage: '',
//       is_cashback_used: false,
//       car_type: 'Standart',
//       date_of_departure: '',
//       payment_type: 'Cash'
//     },
//     resolver: yupResolver<FormValues>(validationSchema)
//   });

//   const onSubmit = form.handleSubmit(values => {
//     mutation.mutate(values, {
//       onSettled: () => form.reset({ ...form.getValues() }, { ...keepOptions })
//     });
//   });

//   return (
//     <FormProvider {...form}>
//       <form className={className} onSubmit={onSubmit}>
//         {children({ ...form, isLoading: mutation.isLoading })}
//       </form>
//     </FormProvider>
//   );
// };

// export default CreateForm;
