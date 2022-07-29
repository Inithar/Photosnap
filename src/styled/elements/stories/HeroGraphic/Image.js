import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const Image = styled.img`
  display: block;
  width: 100%;
  max-height: 500px;

  ${device.tablet} {
    max-height: 650px;
  }
`;
