import { JsonConvert } from 'json2typescript';
import HttpClient, { parseUrl } from '../../common/data/config';
import type { AccountsListResponse } from '../domain/models/accounts-list.types';
import { AccountsListResponseEntity } from './models/accounts-list.entity';
import type { AccountsGetResponse } from '../domain/models/accounts-get.types';
import { AccountsGetDataEntity } from './models/accounts-get.entity';

const jsonConverter = new JsonConvert();

export class AccountsRepository {
  static getAccountsList(page = 1): Promise<AccountsListResponseEntity> {
    return HttpClient.instance
      .get<AccountsListResponse>('/api/users', { params: { page } })
      .then(({ data }) => jsonConverter.deserializeObject(data, AccountsListResponseEntity));
  }

  static getAccountId(id: number): Promise<AccountsGetDataEntity> {
    const url = parseUrl('/api/users/{id}', { id });
    return HttpClient.instance.get<AccountsGetResponse>(url).then(({ data }) => jsonConverter.deserializeObject(data.data, AccountsGetDataEntity));
  }
}
