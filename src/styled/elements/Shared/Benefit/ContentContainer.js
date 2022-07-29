import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const ContentContainer = styled.div`
  margin: 48px 0 56px;

  ${device.tablet} {
    margin: 66px 0 80px;
  }

  ${device.smallDesktop} {
    margin-bottom: 0;
  }
`;
