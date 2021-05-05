import { JsonObject, JsonProperty } from 'json2typescript';
import type { AccountsListData, AccountsListResponse } from '../../domain/models/accounts-list.types';
import { SupportEntity } from './accounts.entity';

@JsonObject('AccountsListDataEntity')
export class AccountsListDataEntity implements AccountsListData {
  @JsonProperty('avatar', String)
  avatar = '';
  @JsonProperty('email', String)
  email = '';
  @JsonProperty('first_name', String)
  first_name = '';
  @JsonProperty('id', Number)
  id = 0;
  @JsonProperty('last_name', String)
  last_name = '';
}

@JsonObject('AccountsListResponseEntity')
export class AccountsListResponseEntity implements AccountsListResponse {
  @JsonProperty('data', [AccountsListDataEntity])
  data: AccountsListDataEntity[] = [];
  @JsonProperty('page', Number)
  page = 0;
  @JsonProperty('per_page', Number)
  per_page = 0;
  @JsonProperty('support', SupportEntity)
  support = new SupportEntity();
  @JsonProperty('total', Number)
  total = 0;
  @JsonProperty('total_pages', Number)
  total_pages = 0;
}
