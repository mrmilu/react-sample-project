import AccountsList from '../components/accounts-list.component';
import AccountsForm from '../components/accounts-form.component';
import type { AppRoute } from '../../../common/view/router/config';

const routes: AppRoute[] = [
  {
    path: '/accounts',
    component: AccountsList,
    routes: [
      {
        path: '/accounts/create',
        component: AccountsForm
      }
    ]
  },
  {
    path: '/accounts-redirect',
    redirect: '/accounts-test'
  },
  {
    path: '/accounts-guard',
    guard: { execute: () => Promise.resolve(true) },
    component: () => 'guarded route --'
  },
  {
    path: '/accounts-guard-with-redirect',
    guard: { execute: () => Promise.resolve('/accounts-redirect') },
    component: () => 'never reaching here --'
  },
  {
    path: '/accounts-test',
    component: () => 'test page --'
  }
];

export default routes;
