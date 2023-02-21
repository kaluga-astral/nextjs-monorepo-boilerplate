import { UseQueryOptions, useQuery } from '@admin/shared';

import { tariffRepository } from './TariffRepository';
import { TariffRepositoryDTO } from './dto';

export const useTariffsQuery = (
  options?: UseQueryOptions<TariffRepositoryDTO.TariffListDTO>,
) =>
  useQuery<TariffRepositoryDTO.TariffListDTO>(
    tariffRepository.getTariffsCacheKey(),
    () => tariffRepository.getTariffs(),
    options,
  );
