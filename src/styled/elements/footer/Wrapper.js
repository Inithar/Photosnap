import styled from 'styled-components';
import { BlackColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const Wrapper = styled.div`
  padding: 56px 32px;
  background-color: ${BlackColor};

  ${device.tablet} {
    padding: 64px 39px;
    display: flex;
  }

  ${device.desktop} {
    padding: 64px 171px;
    display: flex;
  }
`;
