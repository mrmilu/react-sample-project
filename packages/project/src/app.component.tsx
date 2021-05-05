import React, { useCallback } from 'react';
import { appRoutes } from './common/view/router/routes';
import { RouteWithSubRoutes } from './common/view/router/config';
import { HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import accountRoutes from './accounts/view/router/routes';
import './app.styles.scss';
import Title from './common/view/components/title/title.component';
import Button from './common/view/components/button/button.component';
import { useTranslation } from './i18n';
import { useReduxSampleName } from './accounts/view/store/sample.hooks';

function App() {
  const { t, changeLanguage, activeLanguage, languages } = useTranslation();
  const [name, setName] = useReduxSampleName();

  const handleChange = useCallback(
    (lang: string) => {
      void changeLanguage(lang as typeof languages[0]);
    },
    [changeLanguage]
  );

  return (
    <div className="App">
      <header className="App-header">
        <select name="lang" id="lang" value={activeLanguage} onChange={(e) => handleChange(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
        <p>{t('title')}</p>
        <Title>Title component</Title>
        <Router>
          {/*This redirect here is needed only if your root page on load is a different route*/}
          <Redirect exact push from="/" to={accountRoutes[0].path} />
          <Switch>
            {appRoutes.map((route, idx) => (
              <RouteWithSubRoutes key={idx} {...route} />
            ))}
          </Switch>
        </Router>
        {name}
        <Button onClick={() => setName('clicked!')}>Test button</Button>
      </header>
    </div>
  );
}

export default React.memo(App);
