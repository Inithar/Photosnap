import styled from 'styled-components';
import { device } from 'styled/base/Responsive';
import { MainColor } from 'styled/base/Colors';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 32px;
  width: 100%;
  min-height: 288px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 29px;
    width: 34%;
    height: 6px;
    background: ${MainColor};
    z-index: 10;
  }

  ${device.tablet} {
    padding: 68px 39px;
    min-height: 280px;

    &::after {
      left: -1px;
      width: 6px;
      height: 100%;
    }
  }

  ${device.smallDesktop} {
    padding: 64px 120px;
  }

  ${device.desktop} {
    padding: 68px 165px;
  }
`;
