import React, { ReactNode } from 'react';
import { NavigationHeaderContainer, Layout, HeaderLogo, Navigation, NavigationHeaderSpacer } from './NavigationHeader.styles';
import MaxWidth from '../../components/max-width/MaxWidth.styles';
import MrMiluLogo from '../../../../assets/illustrations/mrmilu-logo.svg';
import H1 from '../../components/h1/H1.styles';

const NavigationHeader = ({ children }: { children: ReactNode }): JSX.Element => (
  <>
    <NavigationHeaderContainer>
      <MaxWidth>
        <Layout>
          <HeaderLogo src={MrMiluLogo} alt="Logo of Mr Milú" />
          <H1>Sample project</H1>
          <Navigation>{children}</Navigation>
        </Layout>
      </MaxWidth>
    </NavigationHeaderContainer>
    <NavigationHeaderSpacer />
  </>
);

export default NavigationHeader;
