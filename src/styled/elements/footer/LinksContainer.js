import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.tablet} {
    align-items: flex-start;
    width: 60%;
  }
`;
