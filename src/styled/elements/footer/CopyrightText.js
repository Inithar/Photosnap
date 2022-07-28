import styled from 'styled-components';
import { LightWhiteColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const CopyrightText = styled.p`
  margin-top: 34px;
  font-size: 15px;
  line-height: 20px;
  color: ${LightWhiteColor};

  ${device.tablet} {
    margin-top: auto;
    margin-bottom: 0;
  }
`;
