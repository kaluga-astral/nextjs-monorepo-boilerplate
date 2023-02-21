import { QueryFetchPolicy } from '../shared';

export type RepositoryCachedQueryParams = { fetchPolicy?: QueryFetchPolicy };

export type PaginationInputDTO = {
  offset: number;
  count: number;
};

export type SortInputDTO = {
  sortField?: string;
  sortOrder?: string;
};
