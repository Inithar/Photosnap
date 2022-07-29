import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

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

  ${device.tablet} {
    padding: 68px 39px;
    min-height: 280px;
  }

  ${device.smallDesktop} {
    padding: 64px 120px;
  }

  ${device.desktop} {
    padding: 68px 165px;
  }
`;
