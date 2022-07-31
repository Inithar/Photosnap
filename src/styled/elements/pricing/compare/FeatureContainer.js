import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const FeatureContainer = styled.div`
  margin: 24px 0;

  ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
