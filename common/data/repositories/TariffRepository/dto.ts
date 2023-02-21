export namespace TariffRepositoryDTO {
  export type TariffDTO = {
    id: string;
    name: string;
    price: number;
    description: string;
  };

  export type TariffListDTO = {
    data: TariffDTO[];
    total: number;
  };
}
