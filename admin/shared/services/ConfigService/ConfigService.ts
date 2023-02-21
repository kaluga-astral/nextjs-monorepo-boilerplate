import { createConfigService } from '@example/common/shared';

export type Config = {
  apiUrl: string;
};

export const configService = createConfigService<Config>();
