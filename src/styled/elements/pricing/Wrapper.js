import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const Wrapper = styled.div`
  padding: 64px 28px;

  ${device.tablet} {
    padding: 112px 40px;
  }

  ${device.smallDesktop} {
    padding: 120px 40px 160px;
  }

  ${device.desktop} {
    padding: 120px 165px 160px;
  }
`;
