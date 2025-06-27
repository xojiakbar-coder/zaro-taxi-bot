import { http } from '@/common/services';
import { type AxiosPromise } from 'axios';

export const Routes = (): AxiosPromise<any> => http.request.get('/route/routes/');
