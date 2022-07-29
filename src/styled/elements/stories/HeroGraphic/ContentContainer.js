import styled from 'styled-components';
import { BlackColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const ContentContainer = styled.div`
  padding: 48px 29px;
  background-color: ${BlackColor};

  ${device.tablet} {
    position: absolute;
    top: 0;
    padding: 122px 39px;
    width: 51%;
    background-color: transparent;
    z-index: 2;
  }

  ${device.smallDesktop} {
    padding: 122px 0 122px 112px;
    width: 46%;
  }

  ${device.desktop} {
    padding: 152px 0 122px 112px;
    width: 32%;
  }
`;
