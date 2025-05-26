import * as yup from 'yup';

export const formSchema = yup.object({
  telegram_id: yup.string().min(1, 'Telegram ID majburiy').required('Telegram ID kiriting'),

  front_seat: yup.boolean(),

  extra_luggage: yup.string().nullable(),

  is_delivery: yup.boolean(),

  ride_price: yup
    .string()
    .nullable()
    .matches(/^\d+(\.\d{1,2})?$/, 'To‘g‘ri raqam kiriting'),

  is_cashback_used: yup.boolean(),

  cashback_used_percent: yup
    .number()
    .nullable()
    .min(0, 'Manfiy bo‘lmasligi kerak')
    .max(9223372036854776000, 'Juda katta qiymat'),

  payment_type: yup.string().oneOf(['Cash', 'Card'], 'To‘lov turi noto‘g‘ri').required('To‘lov turini tanlang'),

  date_of_departure: yup.string().required('Ketish vaqtini kiriting'),

  car_type: yup
    .string()
    .oneOf(['Standart', 'Comfort', 'Biznes'], 'Mashina turi noto‘g‘ri')
    .required('Mashina turini tanlang')
});

export const driverTariffSchema = yup.object({
  driver: yup.string().required('Haydovchi ID majburiy'),
  selected_tariff: yup.string().required('Tarifni tanlang'),
  tariff_payment_screenshot: yup
    .mixed<File>()
    .test('file-required', 'To‘lov tasviri majburiy', value => value instanceof File)
    .required('To‘lov tasviri majburiy')
});
