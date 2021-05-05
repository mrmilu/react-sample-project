import type { Support } from './accounts.types';
import type { Page } from '../../../common/domain/models/page.type';

export interface AccountsListData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface AccountsListResponse extends Page<AccountsListData[]> {
  support: Support;
}
