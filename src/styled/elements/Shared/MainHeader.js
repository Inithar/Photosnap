import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const MainHeader = styled.h2`
  margin: 0;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 3.3px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ color }) => color};
  text-align: ${({ align }) => align || 'start'};

  ${device.tablet} {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4px;
  }
`;
