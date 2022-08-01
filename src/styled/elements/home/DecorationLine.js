import styled from 'styled-components';
import { MainColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const DecorationLine = styled.div`
  position: absolute;
  top: 0;
  left: 29px;
  width: 34%;
  height: 6px;
  background: ${MainColor};
  z-index: 10;

  ${device.tablet} {
    top: 173px;
    left: 0;
    width: 6px;
    height: calc(100% - 346px);
  }
`;
