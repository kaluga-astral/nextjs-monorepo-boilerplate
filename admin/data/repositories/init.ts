import { tariffsNetworkSources } from '../sources';

import { tariffRepository } from './external';

/**
 * @description Функция инициализации репозиториев
 * */
export const initRepositories = () => {
  tariffRepository.init(tariffsNetworkSources);
};
