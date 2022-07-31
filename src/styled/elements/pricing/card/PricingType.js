import styled from 'styled-components';
import { BlackColor, WhiteColor } from 'styled/base/Colors';

export const PricingType = styled.h3`
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 24px;
  line-height: 25px;
  font-weight: 700;
  color: ${({ isDark }) => (isDark ? WhiteColor : BlackColor)}; ;
`;
