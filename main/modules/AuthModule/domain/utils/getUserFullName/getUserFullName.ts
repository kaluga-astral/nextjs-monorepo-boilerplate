import { UserRepositoryDTO } from '@main/data';

export const getUserFullName = (
  user: Pick<UserRepositoryDTO.UserFullInfoDTO, 'name' | 'surname'>,
): string => `${user.name} ${user.surname}`;
