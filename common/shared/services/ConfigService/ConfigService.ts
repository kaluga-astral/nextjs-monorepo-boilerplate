export class ConfigService<Config extends object> {
  #config: Config | undefined;

  constructor() {
    this.config = {} as Config;
  }

  init(config: Config) {
    this.config = config as Config;
  }

  get config(): Config {
    if (!this.#config) {
      throw Error('ConfigService is not initialized');
    }

    return this.#config;
  }

  set config(config: Config) {
    this.#config = config;
  }
}

export const createConfigService = <Config extends object>() => new ConfigService<Config>();
