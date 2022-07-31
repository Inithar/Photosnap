import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const TypesContainer = styled.div`
  display: flex;
  margin-bottom: 24px;

  ${device.tablet} {
    margin-bottom: 0;
    width: 55%;
  }
`;
