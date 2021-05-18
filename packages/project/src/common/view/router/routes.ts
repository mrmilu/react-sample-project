import accountRoutes from '../../../accounts/view/router/routes';

export const appRoutes = [
  {
    path: '/',
    exact: true,
    redirect: accountRoutes[0].path
  },
  ...accountRoutes
];
