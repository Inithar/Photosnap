import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const Container = styled.div`
  ${device.tablet} {
    display: flex;
  }

  ${device.smallDesktop} {
    flex-direction: column;
  }
`;
