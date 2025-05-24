import type { AxiosPromise } from 'axios';

import { http } from '../../common/services/index.ts';

import * as Types from './types.ts';
import { useTelegramUser } from '@/modules/order/hooks/getUser';
const telegramId = useTelegramUser();

export const Create = ({ values }: { values: Types.IForm.Create }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post(`/v1/room`, {
    telegram_id: telegramId,
    is_delivery: values.is_delivery,
    ride_price: values.ride_price,
    cashback_used_percent: values.cashback_used_percent,
    front_seat: values.front_seat,
    extra_luggage: values.extra_luggage,
    is_cashback_used: values.is_cashback_used,
    car_type: values.car_type,
    date_of_departure: values.date_of_departure,
    payment_type: values.payment_type
  });

export const Delete = ({ id }: { id: string }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.delete(`/v1/room/${id}`);
