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

  #tariffSources?: TariffSources;

  constructor(private readonly queryClient: QueryClient) {
    this.queryClient = queryClient;
  }

  get tariffSources() {
    if (this.#tariffSources) {
      return this.#tariffSources;
    }

    throw Error('TariffRepository is not initialized');
  }

  public init(tariffSources: TariffSources) {
    this.#tariffSources = tariffSources;
  }

  public getTariffsCacheKey = () => [this.tariffsCacheID];

  /**
   * @description Получение списка всех тарифов
   * */
  public getTariffs = async (params?: RepositoryCachedQueryParams) =>
    this.queryClient.fetchQuery<TariffRepositoryDTO.TariffListDTO>(
      this.getTariffsCacheKey(),
      () => this.#tariffSources.getTariffs(),
      params,
    );
}

export const tariffRepository = new TariffRepository(queryClientInstance);
