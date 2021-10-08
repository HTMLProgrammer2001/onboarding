export interface IPaginator<T> {
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  skip: number;
  responseList: Array<T>;
}
