import { IPaginator } from '../interfaces/IPaginator.interface';

type IResult<T> = {
  rows: T[];
  count: number;
};

export const convertResultToPaginator = <T>(
  result: IResult<T>,
  size: number,
  page: number,
): IPaginator<T> => ({
  page,
  size,
  skip: (page - 1) * size,
  totalElements: result.count,
  totalPages: Math.ceil(result.count / size),
  responseList: result.rows,
});
