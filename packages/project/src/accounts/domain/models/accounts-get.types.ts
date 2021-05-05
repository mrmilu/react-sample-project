import type { Support } from './accounts.types';

export interface AccountsGetData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface AccountsGetResponse {
  data: AccountsGetData;
  support: Support;
}
