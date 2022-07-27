import styled from 'styled-components';
import { WhiteColor } from 'styled/base/Colors';

export const MobileContainer = styled.div`
  position: absolute;
  top: 72px;
  padding: 32px;
  width: 100%;
  background-color: ${WhiteColor};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-150%)'};
  transition: transform 0.6s;
  z-index: 2;
`;
