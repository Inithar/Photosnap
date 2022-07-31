import styled from 'styled-components';
import { BlackColor, WhiteColor } from 'styled/base/Colors';

export const Price = styled.p`
  margin: 0;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.2px;
  font-weight: 700;
  color: ${({ isDark }) => (isDark ? WhiteColor : BlackColor)};
`;
