import styled from 'styled-components';
import { device } from 'styled/base/Responsive';
import { MainColor } from 'styled/base/Colors';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 32px;
  width: 100%;
  height: 375px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-20px);
    z-index: 5;
  }

  &:hover::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 6px;
    background: ${MainColor};
    z-index: 10;
  }

  ${device.tablet} {
    padding: 0 40px;
    width: 50%;
    height: 500px;
  }

  ${device.smallDesktop} {
    width: 25%;
  }
`;
