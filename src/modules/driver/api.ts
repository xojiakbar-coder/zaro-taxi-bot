import { type AxiosPromise } from 'axios';
import { http } from '../../common/services';

import * as Types from './types';

// Driver
export const Driver = (id: string): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post('/driver/me/', {
    telegram_id: id
  });

// Create ride
export const CreateRide = ({ id, rideId }: { id: string; rideId: number }): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post('/driver/delete-ride/', {
    telegram_id: id,
    ride_id: rideId
  });
