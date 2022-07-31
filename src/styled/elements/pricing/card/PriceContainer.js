import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const PriceContainer = styled.div`
  margin-bottom: 40px;
  text-align: center;

  ${device.tablet} {
    margin-left: auto;
    text-align: end;
  }

  ${device.smallDesktop} {
    margin-left: 0;
    text-align: center;
  }
`;
