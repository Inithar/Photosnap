import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const BenefitsContainer = styled.div`
  padding: 80px 32px 24px;

  ${device.tablet} {
    padding: 120px 156px 40px;
  }

  ${device.smallDesktop} {
    display: flex;
    padding: 120px 165px;
  }
`;
