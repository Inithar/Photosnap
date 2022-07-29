import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 32px;
  width: 100%;
  height: 375px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;

  ${device.tablet} {
    padding: 0 40px;
    width: 50%;
    height: 500px;
  }

  ${device.smallDesktop} {
    width: 25%;
  }
`;
