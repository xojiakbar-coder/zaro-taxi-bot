import type { AxiosPromise } from 'axios';

import { http } from '../../common/services/';

import * as Types from './types.ts';
import { getTelegramUser } from './hooks/getTelegramUser.tsx';

const { id } = getTelegramUser();

export const Create = ({ values }: { values: Types.IForm.Create }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post(`/v1/room`, {
    telegram_id: id,
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

export const Delete = ({ id }: { id: number }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.delete(`/v1/room/${String(id)}`);
