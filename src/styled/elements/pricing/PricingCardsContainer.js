import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const PricingCardsContainer = styled.div`
  ${device.tablet} {
    margin-bottom: 112px;
  }

  ${device.smallDesktop} {
    display: flex;
    margin-bottom: 160px;
  }
`;
