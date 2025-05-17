import type { AxiosPromise } from 'axios';

import { http } from '../../common/services/';

import * as Types from './types.ts';

export const Create = ({ values }: { values: Types.IForm.Create }): AxiosPromise<Types.IApi.Single> =>
  http.request.post(`/v1/room`, {
    telegram_id: '',
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

// export const Update = ({
//   id,
//   values
// }: {
//   id: number;
//   values: Types.IForm.Update;
// }): AxiosPromise<Types.IApi.Single.Response> =>
//   http.request.put(`/v1/room/${id}`, {
//     id,
//     name: values.name,
//     building_id: values.buildingId,
//     floor_id: values.floorId
//   });

export const Delete = ({ id }: { id: number }): AxiosPromise<Types.IApi.Single> =>
  http.request.delete(`/v1/room/${String(id)}`);
