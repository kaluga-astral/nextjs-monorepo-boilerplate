import { apiHttpClient } from '@main/shared';

import { OwnerNetworkDTO } from './dto';

export const ownerNetworkSources = {
  getInfo: (ownerID: string) =>
    apiHttpClient.get<void, OwnerNetworkDTO>(`/owner/${ownerID}`),
};

export type OwnerNetworkSources = typeof ownerNetworkSources;
