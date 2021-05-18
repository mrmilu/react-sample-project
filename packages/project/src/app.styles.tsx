import styled from 'styled-components';
import tw from 'twin.macro';

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppHeaderContainer = styled.header`
  ${tw`bg-warning`}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  font-size: calc(10px + 2vmin);
  color: white;

  select {
    ${tw`text-black`}
  }
`;
