export namespace UserRepositoryDTO {
  export type UserContactDTO = {
    email?: string;
    phone: string;
  };

  export type UserPersonDTO = {
    name: string;
    surname: string;
    displayName: string;
  };

  export type UserFullInfoDTO = UserContactDTO & UserPersonDTO;
}
