import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const BenefitsContainer = styled.div`
  padding: 80px 32px 24px;

  ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 112px 38px 32px 39px;
  }

  ${device.desktop} {
    padding: 160px 145px;
  }
`;
