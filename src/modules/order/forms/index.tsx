import type { OrderFormData } from '@/modules/routes/types';
import dayjs from 'dayjs';
const telegramUserId = localStorage.getItem('telegramUserId');

export const defaultFormData: OrderFormData = {
  telegram_id: String(telegramUserId),
  is_delivery: false,
  ride_price: '0',
  cashback_used_percent: 0,
  front_seat: false,
  extra_luggage: '',
  is_cashback_used: false,
  car_type: 'Standart',
  date_of_departure: `${dayjs().toDate()}`,
  payment_type: 'Cash'
};
