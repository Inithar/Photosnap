import styled from 'styled-components';
import { WhiteColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 28px 24px;
  width: 100%;
  height: 72px;
  background-color: ${WhiteColor};

  ${device.tablet} {
    padding: 16px 40px;
  }

  ${device.desktop} {
    padding: 28px 165px;
  }
`;
