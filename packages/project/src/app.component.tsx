import React, { useCallback } from 'react';
import { appRoutes } from './common/view/router/routes';
import { RouteWithSubRoutes } from './common/view/router/config';
import { HashRouter as Router, Switch } from 'react-router-dom';
import 'twin.macro';
import { AppContainer, AppHeaderContainer } from './app.styles';
import Title from './common/view/components/title/title.component';
import Button from './common/view/components/button/button.component';
import { useTranslation } from './i18n';
import { useReduxSampleName } from './accounts/view/store/sample.hooks';

function App() {
  const { t, changeLanguage, activeLanguage, languages } = useTranslation();
  const [name, setName, setNameThunk] = useReduxSampleName();

  const handleChange = useCallback(
    (lang: string) => {
      void changeLanguage(lang as typeof languages[0]);
    },
    [changeLanguage]
  );

  return (
    <AppContainer>
      <AppHeaderContainer>
        <select name="lang" id="lang" value={activeLanguage} onChange={(e) => handleChange(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
        <p tw="bg-green-200">{t('title')}</p>
        <Title>Title component</Title>
        <Router>
          <Switch>
            {appRoutes.map((route, idx) => (
              <RouteWithSubRoutes key={idx} {...route} />
            ))}
          </Switch>
        </Router>
        {name}
        <Button onClick={() => setName('clicked!')}>Test button</Button>
        <br />
        <Button onClick={() => setNameThunk('clicked! thunk')}>Test button (thunk)</Button>
      </AppHeaderContainer>
    </AppContainer>
  );
}

export default React.memo(App);
