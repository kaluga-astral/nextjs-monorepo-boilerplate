import { apiHttpClient } from '@main/shared';

import { TariffListNetworkDTO } from './dto';

export const tariffsNetworkSources = {
  getTariffs: () => apiHttpClient.get<void, TariffListNetworkDTO>('/tariffs'),
};

export type TariffsNetworkSources = typeof tariffsNetworkSources;
