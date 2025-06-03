import dayjs from 'dayjs';
import { useStoredTelegramUser } from './getStoredUser';
import type { OrderFormData } from '@/modules/routes/types';

export const useDefaultFormData = (): OrderFormData => {
  const user = useStoredTelegramUser();
  const routeId = localStorage.getItem('routeId');
  return {
    telegram_id: String(user?.id ?? ''),
    route: routeId ? Number(routeId) : 0,
    is_delivery: false,
    ride_price: null,
    cashback_used_percent: 0,
    front_seat: false,
    extra_luggage: '',
    is_cashback_used: false,
    car_type: null,
    date_of_departure: `${dayjs().toDate()}`,
    payment_type: null
  };
};
