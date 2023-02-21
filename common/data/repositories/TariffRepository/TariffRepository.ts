import {
  QueryClient,
  queryClient as queryClientInstance,
} from '../../../shared';
import { RepositoryCachedQueryParams } from '../../types';

import { TariffRepositoryDTO } from './dto';

type TariffSources = {
  getTariffs: () => Promise<TariffRepositoryDTO.TariffListDTO>;
};

/**
 * @description Repository для работы с даннми тарифов
 * */
export class TariffRepository {
  private readonly tariffsCacheID = 'tariffsCacheID';

  constructor(
    private readonly tariffSources: TariffSources,
    private readonly queryClient: QueryClient,
  ) {
    this.tariffSources = tariffSources;
    this.queryClient = queryClient;
  }

  public getTariffsCacheKey = () => [this.tariffsCacheID];

  /**
   * @description Получение списка всех тарифов
   * */
  public getTariffs = async (params?: RepositoryCachedQueryParams) =>
    this.queryClient.fetchQuery<TariffRepositoryDTO.TariffListDTO>(
      this.getTariffsCacheKey(),
      () => this.tariffSources.getTariffs(),
      params,
    );
}

export const createTariffRepository = (tariffSources: TariffSources) =>
  new TariffRepository(tariffSources, queryClientInstance);
