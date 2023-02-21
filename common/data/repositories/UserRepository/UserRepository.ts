import {
  QueryClient,
  queryClient as queryClientInstance,
} from '../../../shared';

import { RepositoryCachedQueryParams } from '../../types';

import {UserRepositoryDTO } from './dto';

type UserSources = {
  getContactInfo: () => Promise<UserRepositoryDTO.UserContactDTO>;
  getPersonInfo: () =>  Promise<UserRepositoryDTO.UserPersonDTO>;
};

/**
 * @description Repository для работы с даннми юзере
 * */
export class UserRepository {
  public fullInfoCacheKey = ['fullInfoCacheKey'];

  public contactInfoCacheKey = ['contactInfoCacheKey'];

  public personInfoCacheKey = ['personInfoCacheKey'];

  constructor(
    private readonly userSources: UserSources,
    private readonly queryClient: QueryClient,
  ) {
    this.userSources = userSources;
    this.queryClient = queryClient;
  }

  /**
   * @description Получение полной информации о юзере
   * */
  public getFullInfo = (params?: RepositoryCachedQueryParams) =>
    this.queryClient.fetchQuery<UserRepositoryDTO.UserFullInfoDTO>(
      this.fullInfoCacheKey,
      async () => {
        const [contactInfo, personInfo] = await Promise.all([
          this.getContactInfo(params),
          this.getPersonInfo(params),
        ]);

        return {
          ...contactInfo,
          ...personInfo,
        };
      },
      params,
    );

  public getContactInfo = (params?: RepositoryCachedQueryParams) =>
    this.queryClient.fetchQuery<UserRepositoryDTO.UserContactDTO>(
      this.contactInfoCacheKey,
      this.userSources.getContactInfo,
      params,
    );

  public getPersonInfo = (params?: RepositoryCachedQueryParams) =>
    this.queryClient.fetchQuery<UserRepositoryDTO.UserPersonDTO>(
      this.personInfoCacheKey,
      this.userSources.getPersonInfo,
      params,
    );
}

export const createUserRepository = (userSources: UserSources) => new UserRepository(
    userSources,
  queryClientInstance,
);
