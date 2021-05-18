import React, { ComponentType, useCallback, useState } from 'react';
import { Redirect, Route, RouteChildrenProps, RouteComponentProps } from 'react-router-dom';
import type * as H from 'history';
import { RedirectConfig } from './RedirectConfig';

export type RouteGuard = {
  execute: (route: AppRoute, location: H.Location<any>, query: URLSearchParams) => Promise<boolean | string | RedirectConfig<any>>;
};
export type AppRoute = {
  path: string;
  component?: ComponentType<any>;
  routes?: AppRoute[];
  exact?: boolean;
  guard?: RouteGuard;
  redirect?: string;
};

type Props = AppRoute;

export interface CustomRouteChildrenProps extends RouteChildrenProps {
  routes: AppRoute[];
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export const RouteWithSubRoutes = (route: Props) => {
  const [guardResult, setGuardResult] = useState<React.ReactNode | null>(null);
  const routeGuard = useCallback(
    async (props: RouteComponentProps<{ [K: string]: string | undefined }>) => {
      if (route.guard) {
        const queryParams = new URLSearchParams(props.location.search);
        const result = await route.guard.execute(route, props.location, queryParams);
        if (typeof result === 'boolean' && result && route.component) {
          setGuardResult(<route.component {...props} routes={route.routes} />);
        } else if (typeof result === 'string' || result instanceof RedirectConfig) {
          setGuardResult(<Redirect exact push from={route.path} to={result} />);
        } else if (!result) {
          setGuardResult(<Redirect exact push from={route.path} to="/" />);
        }
      }
    },
    [route]
  );

  if (guardResult) {
    return <Route path={route.path} exact={Boolean(route.exact)} render={() => guardResult} />;
  }
  return (
    <Route
      path={route.path}
      exact={Boolean(route.exact)}
      render={(props) => {
        if (route.guard) {
          void routeGuard(props);
          return null;
        }
        // eslint-disable-next-line sonarjs/no-small-switch
        switch (true) {
          case Boolean(route.redirect):
            return <Redirect exact push from={route.path} to={route.redirect ?? '/'} />;
          default:
            if (route.component) {
              return <route.component {...props} routes={route.routes} />;
            } else {
              return <Redirect exact push from={route.path} to="/" />;
            }
        }
      }}
    />
  );
};
