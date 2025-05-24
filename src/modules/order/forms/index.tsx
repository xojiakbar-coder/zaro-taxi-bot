import dayjs from 'dayjs';
import * as Types from '../../order/types';
import type { OrderFormData } from '@/modules/routes/types';

const userStr = localStorage.getItem('telegramUser');
const user: Types.IEntity.User | null = userStr ? JSON.parse(userStr) : null;

const routeId = localStorage.getItem('routeId');

export const defaultFormData: OrderFormData = {
  telegram_id: String(user && user?.id),
  route: routeId ? Number(routeId) : 0,
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
