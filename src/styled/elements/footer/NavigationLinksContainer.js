import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const NavigationLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.tablet} {
    flex-direction: row;
    order: 1;
    margin-top: 32px;
  }
`;
