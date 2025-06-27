import { type AxiosPromise } from 'axios';
import { http } from '../../common/services';

import * as Types from './types';

export const Passenger = (id: string): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post('/passenger/me/', {
    telegram_id: id
  });
