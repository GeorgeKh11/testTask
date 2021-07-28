import axios, { AxiosError } from 'axios';

import { appConfig } from '../appConfig';
import { EventsApi } from './events/EventsApi';

axios.interceptors.request.use(
  config => {
    console.log('Request', {
      url: config.url,
      ...config.headers,
      data: config.data,
    });

    return {
      ...config,
      baseURL: appConfig.BASE_URL,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
      },
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    //TODO
    switch (error.response?.status) {
      case 401: {
        if (axios.defaults.headers.Authorization) {
          console.log('Bad Token');
        }

        throw error;
      }

      case 403: {
        throw error;
      }

      case 400: {
        throw error;
      }

      default: {
        throw error;
      }
    }
  },
);

class Api {
  eventsApi = new EventsApi();

  setToken = (token: string) => {
    console.log('token', token);
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  };

  clearToken = () => {
    axios.defaults.headers.Authorization = null;
  };
}

export default new Api();
