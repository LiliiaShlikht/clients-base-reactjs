export default interface IClient {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  avatarUrl: string;
  changeModalState: Function;
}
