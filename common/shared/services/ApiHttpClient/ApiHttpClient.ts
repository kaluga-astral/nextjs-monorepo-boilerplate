import { createHttpService } from '../HttpService';
import { configService } from '../ConfigService';

import { ApiDataError } from './error';
import { formatApiError } from './utils';

/**
 * Создаем экземпляр httpService
 */
const httpService = createHttpService();

/**
 *
 *@description Инициализация apiHttpClient
 */
export const initApiHttpClient = (apiUrl: string) => {
  const apiHttpClient = httpService.init({
    baseURL: apiUrl,
  });

  apiHttpClient.initErrorFormatter<ApiDataError>(formatApiError);
};

/**
 * @description Http service для взаимодействия с основным api
 * */
export const apiHttpClient = httpService;
