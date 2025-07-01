import { http } from '@/common/services';
import type { AxiosPromise } from 'axios';

import * as Types from './types';

export const Create = ({ values }: { values: Types.IForm.Create }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post(`/passenger/bookings/create/`, {
    telegram_id: values.telegramId,
    route: values.route,
    front_seat: values.frontSeat,
    extra_luggage: values.extraLuggage,
    is_delivery: values.isDelivery,
    ride_price: values.ridePrice,
    is_cashback_used: values.isCashbackUsed,
    cashback_used_percent: values.cashbackUsedPercent,
    payment_type: values.paymentType,
    date_of_departure: `${values.dateOfDeparture} ${values.timeOfDeparture}`,
    car_type: values.carType
  });
