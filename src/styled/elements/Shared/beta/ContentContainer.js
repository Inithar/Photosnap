import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const ContentContainer = styled.div`
  width: 100%;
  z-index: 3;

  ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;
