// фильм для детальной страницы
export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  position: string;
  image: string;
  is_observer: boolean;
  is_master: boolean;
  game?: string;
}
