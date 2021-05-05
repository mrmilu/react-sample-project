import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Provider } from 'react-redux';
import store from './common/view/store/store';
import App from './app.component';
import './assets/reset.scss';
import './index.scss';
import { ConfigEnv } from './common/config.env';

Sentry.init({
  dsn: ConfigEnv.SENTRY_URL,
  release: `${ConfigEnv.PACKAGE_NAME}-${ConfigEnv.NODE_ENV}@${ConfigEnv.PACKAGE_VERSION}`
});

ReactDOM.render(
  <Sentry.ErrorBoundary fallback="An error has occurred">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Sentry.ErrorBoundary>,
  document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (ConfigEnv.IS_DEV && import.meta?.hot) {
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
  import.meta.hot.accept();
}
