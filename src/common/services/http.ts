import axios from 'axios';

// import createAuthRefreshInterceptor from 'axios-auth-refresh';
// import { get } from 'radash';

const pureHttp = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'ru',
    'Content-Type': 'application/json'
  }
});

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'ru',
    'Content-Type': 'application/json'
  }
  // paramsSerializer: params => {
  //   const searchParams = new URLSearchParams();
  //
  //   Object.keys(params).forEach(key => {
  //     const value = params[key];
  //
  //     if (value !== undefined) {
  //       searchParams.append(key, value);
  //     }
  //   });
  //
  //   return searchParams.toString();
  // }
});

// const refreshToken = async () => {
//   const refreshToken = storage.local.get(config.api.refreshTokenKey) || '';

//   try {
//     const { data } = await pureHttp.post(`/api/user/v1/token/refresh`, undefined, {
//       params: {
//         refreshToken
//       }
//     });

//     storage.local.set(config.api.accessTokenKey, get(data, 'data.accessToken'));
//     storage.local.set(config.api.refreshTokenKey, get(data, 'data.refreshToken'));
//   } catch (error) {
//     storage.local.remove(config.api.accessTokenKey);
//     storage.local.remove(config.api.refreshTokenKey);

//     window.location.href = '/auth';

//     throw error;
//   }
// };

// createAuthRefreshInterceptor(http, refreshToken);

export default { pureRequest: pureHttp, request: http };
