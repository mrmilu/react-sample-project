import styled from 'styled-components';
import tw from 'twin.macro';

export const NavigationHeaderContainer = styled.header`
  ${tw`fixed w-full p-4 pt-6 bg-haddock-blue-500 text-white`}
`;

export const NavigationHeaderSpacer = styled.div`
  height: 6rem;
`;

export const Layout = styled.div`
  ${tw`flex items-baseline space-x-4`}
`;

export const HeaderLogo = styled.img`
  ${tw`block flex-none h-10 w-auto`}
`;

export const Navigation = styled.nav`
  ${tw`flex-1 flex justify-end items-baseline space-x-4`}
  a {
    ${tw`font-bold text-sm hover:underline`}
  }
`;
