import { JsonObject, JsonProperty } from 'json2typescript';
import type { AccountsGetData, AccountsGetResponse } from '../../domain/models/accounts-get.types';
import { SupportEntity } from './accounts.entity';

@JsonObject('AccountsGetDataEntity')
export class AccountsGetDataEntity implements AccountsGetData {
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

@JsonObject('AccountsGetResponseEntity')
export class AccountsGetResponseEntity implements AccountsGetResponse {
  @JsonProperty('data', AccountsGetDataEntity)
  data = new AccountsGetDataEntity();
  @JsonProperty('support', SupportEntity)
  support = new SupportEntity();
}
