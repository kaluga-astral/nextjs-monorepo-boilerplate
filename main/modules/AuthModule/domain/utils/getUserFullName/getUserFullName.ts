import { UserRepositoryDTO } from '@admin/data';

export const getUserFullName = (
  user: Pick<UserRepositoryDTO.UserFullInfoDTO, 'name' | 'surname'>,
): string => `${user.name} ${user.surname}`;
