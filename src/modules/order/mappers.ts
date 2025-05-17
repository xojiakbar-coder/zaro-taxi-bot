import { get } from 'radash';
import * as Types from './types';

export const Order = (item?: any): Types.IEntity.Order => ({
  telegram_id: get(item, 'telegram_id', ''),
  is_delivery: get(item, 'is_delivery', false),
  ride_price: get(item, 'ride_price', '0'),
  cashback_used_percent: get(item, 'cashback_used_percent', 0),
  front_seat: get(item, 'front_seat', false),
  extra_luggage: get(item, 'extra_luggage', ''),
  is_cashback_used: get(item, 'is_cashback_used', false),
  car_type: get(item, 'car_type', 'Standart'),
  date_of_departure: get(item, 'date_of_departure', ''),
  payment_type: get(item, 'payment_type', 'Cash')
});
