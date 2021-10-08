import { IResponse } from './IResponse.interface';
import { IPaginator } from './IPaginator.interface';

export type IPaginatedResponse<T> = IResponse<IPaginator<T>>;
