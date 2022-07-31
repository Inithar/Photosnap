import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const FeaturesContainer = styled.div`
  margin-top: 64px;

  ${device.tablet} {
    margin: 64px auto 0;
    max-width: 731px;
  }

  ${device.smallDesktop} {
    margin-top: 56px;
  }
`;
