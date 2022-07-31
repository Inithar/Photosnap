import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const DescriptionContainer = styled.div`
  margin-bottom: 40px;
  text-align: center;

  ${device.tablet} {
    margin-bottom: 17px;
    text-align: start;
    width: 40%;
  }

  ${device.smallDesktop} {
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
  }
`;
