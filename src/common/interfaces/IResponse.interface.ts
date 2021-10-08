import { IError } from './IError.interface';
import { StatusEnum } from '../constants/Status.enum';

export interface IResponse<T> {
  status: StatusEnum;
  errors: IError[];
  data: T;
}
