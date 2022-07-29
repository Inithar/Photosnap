import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const Image = styled.img.attrs(({ src }) => ({
  src,
}))`
  display: block;
  width: 100%;

  ${device.tablet} {
    order: ${({ isRight }) => (isRight ? 1 : 0)};
    width: 35%;
  }

  ${device.smallDesktop} {
    width: 53%;
  }
`;
