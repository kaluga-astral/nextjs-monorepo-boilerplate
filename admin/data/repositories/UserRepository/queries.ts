import { ReactChild } from 'react';
import { UseQueryOptions, useQuery } from '@admin/shared';

import { userRepository } from './UserRepository';
import { UserRepositoryDTO } from './dto';

export const useUserFullInfoQuery = (
  options?: UseQueryOptions<UserRepositoryDTO.UserFullInfoDTO>,
) =>
  useQuery<UserRepositoryDTO.UserFullInfoDTO>(
    userRepository.fullInfoCacheKey,
    () => userRepository.getFullInfo(),
    options,
  );
