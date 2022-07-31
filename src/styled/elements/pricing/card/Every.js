import styled from 'styled-components';
import { LightBlackColor, LightWhiteColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const Every = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 25px;
  color: ${({ isDark }) => (isDark ? LightWhiteColor : LightBlackColor)};

  ${device.tablet} {
    margin-right: 4px;
  }

  ${device.smallDesktop} {
    margin-right: 0;
  }
`;
